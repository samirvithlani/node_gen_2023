const multer = require("multer");
const googleUploadController = require("./GoogleUploadController");
const readExcel = require("../util/ReadExcel");
const employeeModel = require("../models/EmployeeModel");

const storage = multer.diskStorage({
  // destination:'./uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, //infile size 1mb
}).single("file");

const uploadFile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(400).json({
        message: err,
      });
    } else {
      //call google drive upload
      //const uploadId = await googleUploadController.uploadFile(req.file.path);
      var data = readExcel.readFile(req.file.path);
      console.log(data);
      //save to database

      const isSotred = await employeeModel.insertMany(data)
      

      res.status(200).json({
        message: "File uploaded successfully",
        data:isSotred,
        //file: req.file,
        // uploadId: uploadId,
      });
    }
  });
};

const getAllFiles = async (req, res) => {

    const files = await googleUploadController.getAllFileFromGoogleDrive();
    res.status(200).json({
        message:"All files",
        files:files
    })


}
module.exports = {
  uploadFile,
    getAllFiles,
};
