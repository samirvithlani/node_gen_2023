const router = require("express").Router();
const uploadController = require("../controllers/FileUploadController");
router.post("/upload", uploadController.uploadFile);
router.get("/all", uploadController.getAllFiles);
module.exports = router;
