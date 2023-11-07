const userModels = require("../models/UserModel");
const encrypt = require("../util/Encrypt");

const addUser = async (req, res) => {
  // {
  //     "name":"ajay",
  //     "email":"ajay@gmail.com",
  //     "age":22,
  //     "role":"653fac92467f9b99b1c0b652"
  // }

  try {
    const savedUser = await userModels.create(req.body);
    if (savedUser) {
      res.status(200).json({
        data: savedUser,
        message: "user created successfully",
      });
    } else {
      res.status(500).json({
        message: "user not created",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};
const addUser1 = async (req, res) => {
  // {
  //     "name":"ajay",
  //     "email":"ajay@gmail.com",
  //     "age":22,
  //     "role":"653fac92467f9b99b1c0b652"
  // }

  const user = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    role: req.body.role,
    permissions: req.body.permissions,
    password: encrypt.generatePassword(req.body.password),
  };

  try {
    const savedUser = await userModels.create(user);
    if (savedUser) {
      res.status(200).json({
        data: savedUser,
        message: "user created successfully",
      });
    } else {
      res.status(500).json({
        message: "user not created",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  //populate specfic field from ref model..
  try {
    const users = await userModels
      .find()
      .populate("role")
      .populate("permissions");
    if (users && users.length > 0) {
      res.status(200).json({
        data: users,
        message: "users fetched successfully",
      });
    } else {
      res.status(500).json({
        message: "users not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//PUT
const addPermissionToUser = async (req, res) => {
  //userid --> req.body
  //permissionid --> req.body
  const userId = req.body.userId;
  const permissionId = req.body.permissionId;
  console.log(userId, permissionId);

  const data = await userModels.findByIdAndUpdate(userId, {
    $push: {
      permissions: permissionId,
    },
  });

  res.status(200).json({
    data: data,
  });
};

const removePermissionFromUser = async (req, res) => {
  //userid --> req.body
  //permissionid --> req.body
  const userId = req.body.userId;
  const permissionId = req.body.permissionId;
  console.log(userId, permissionId);

  const data = await userModels.findByIdAndUpdate(userId, {
    $pull: {
      permissions: permissionId,
    },
  });

  res.status(200).json({
    data: data,
  });
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userModels.findOne({ email: email, password: password });
    if (user) {
      res.status(200).json({
        data: user,
        message: "user logged in successfully",
      });
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const loginuser1 = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //find user from email.... and will get user objet...

  try {
    //rahul@gmail.com
    console.log("email...",email);
    const user = await userModels.findOne({ email: email });
    if (user) {
      console.log("user....",user);
      //user data... access password from user object...
      const flag = encrypt.comparePassword(password, user.password);
      if (flag) {
        res.status(200).json({
          data: user,
          message: "user logged in successfully",
        });
      } else {
        res.status(404).json({
          message: "user not found",
        });
      }
    } 
    else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addUser,
  addUser1,
  getAllUsers,
  addPermissionToUser,
  removePermissionFromUser,
  loginUser,
  loginuser1
};
