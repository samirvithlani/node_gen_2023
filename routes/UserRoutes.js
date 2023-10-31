const userController = require('../controllers/UserController');
const router = require('express').Router();
router.post("/user",userController.addUser);
router.get("/user",userController.getAllUsers);
router.put("/addpermission",userController.addPermissionToUser);
router.put("/removepermission",userController.removePermissionFromUser);
module.exports = router;