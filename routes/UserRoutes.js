const userController = require('../controllers/UserController');
const router = require('express').Router();
router.post("/user",userController.addUser);
router.get("/user",userController.getAllUsers);
module.exports = router;