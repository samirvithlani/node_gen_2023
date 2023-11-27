const tokenValidation = require("../util/TokenValidation");
const authMiddleware = (req, res, next) => {
  //req --> headers.token..
  //next () --> controller
  //res --> response

  //Bearer token Bearere ""

  const token = req.headers.authorization;

  if (token !== undefined) {
    if (token.startsWith("Bearer ")) {
      const tokenData = token.split(" ")[1]; // original token...
      const user = tokenValidation.validateToken(tokenData);
      if (user != undefined) {
        next(); //controller
      } else {
        res.status(401).json({
          message: "unauthorized",
        });
      }
    } else {
      res.status(401).json({
        message: "Invalid token",
      });
    }
  } else {
    res.status(401).json({
      message: "Token is not present",
    });
  }
};

module.exports = {
  authMiddleware,
};
