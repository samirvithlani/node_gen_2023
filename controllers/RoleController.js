const roleModel = require('../models/RoleModel');
const createRole = async(req,res)=>{


    try{
        //save....
        const savedRole = await roleModel.create(req.body);
        res.status(200).json({
            data: savedRole,
            message:"role created successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }


}
const getAllRoles = async(req,res)=>{

    try{
        const roles = await roleModel.find();
        res.status(200).json({
            data: roles,
            message:"roles fetched successfully"
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    createRole,
    getAllRoles
}