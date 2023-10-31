const userModels = require('../models/UserModel');

const addUser = async(req,res)=>{

    // {
    //     "name":"ajay",
    //     "email":"ajay@gmail.com",
    //     "age":22,
    //     "role":"653fac92467f9b99b1c0b652"
    // }


    try{
        const savedUser = await userModels.create(req.body);
        if(savedUser){
            res.status(200).json({
                data: savedUser,
                message:"user created successfully"
            })
        }else{
            res.status(500).json({
                message: "user not created"
            })
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }

}

const getAllUsers = async(req,res)=>{


    //populate specfic field from ref model..
    try{
        const users = await userModels.find().populate("role").populate("permissions");
        if(users && users.length>0){
            res.status(200).json({
                data: users,
                message:"users fetched successfully"
            })
        }
        else{
            res.status(500).json({
                message: "users not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }



}

//PUT
const addPermissionToUser = async(req,res)=>{

    //userid --> req.body
    //permissionid --> req.body
    const userId = req.body.userId;
    const permissionId = req.body.permissionId;
    console.log(userId,permissionId);

    const data = await userModels.findByIdAndUpdate(userId,{
        $push:{
            permissions: permissionId
        }
    })

    res.status(200).json({
        data: data,
    })

}

const removePermissionFromUser = async(req,res)=>{

    //userid --> req.body
    //permissionid --> req.body
    const userId = req.body.userId;
    const permissionId = req.body.permissionId;
    console.log(userId,permissionId);

    const data = await userModels.findByIdAndUpdate(userId,{
        $pull:{
            permissions: permissionId
        }
    })

    res.status(200).json({
        data: data,
    })

}
module.exports = {
    addUser,
    getAllUsers,
    addPermissionToUser,
    removePermissionFromUser

}