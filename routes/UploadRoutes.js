const router = require("express").Router();
const uploadController = require("../controllers/FileUploadController");
router.post("/upload", uploadController.uploadFile);
module.exports = router;
