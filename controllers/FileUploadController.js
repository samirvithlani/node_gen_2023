const multer = require('multer');

const storage = multer.diskStorage({
    destination:'./uploads/',
    filename: function(req, file, cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000}, //infile size 1mb
}).single("file")


const uploadFile = async (req, res) => {

    
    upload(req,res,(err)=>{
        if(err){
            res.status(400).json({
                message: err
            })
        }
        else{
            res.status(200).json({
                message: 'File uploaded successfully',
                file: req.file
            })
        }
    })
}
module.exports = {
    uploadFile
}