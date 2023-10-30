const userModels = require('../models/UserModel');

const addUser = async(req,res)=>{

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
        const users = await userModels.find().populate("role")
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


module.exports = {
    addUser,
    getAllUsers
}