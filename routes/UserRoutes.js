const userController = require('../controllers/UserController');
const router = require('express').Router();
router.post("/user",userController.addUser1);
router.get("/user",userController.getAllUsers);
//router.get("/user/:permid",userController.getAllUsers);
//if you have passed read permission id ---> 
//update user ---> update user
router.put("/addpermission",userController.addPermissionToUser);
router.put("/removepermission",userController.removePermissionFromUser);
router.post("/login",userController.loginuser1);
module.exports = router;