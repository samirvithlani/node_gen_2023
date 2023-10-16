const express = require('express')
const app = express()
const mongoose = require('mongoose')
const employeeModel = require("./models/EmployeeModel")


//GET,POST,PUT,PATCH,DELETE
// GET - to get the data from server, browser.....
// POST - to send the data to server
// PUT - to update the data
// PATCH - to update the data
// DELETE - to delete the data

app.get("/employee",(req,res)=>{

    console.log("Employee API is called")
    //res.send("Employee API is called")
    res.status(200).json({
        message:"Employee API is called"
    })
})

app.get("/emp",(req,res)=>{


        employeeModel.find()
            .then((data)=>{
            res.status(200).json({
                employee:data,
                message:"Employee fetched successfully"
            })
        })
        .catch((err)=>{
            res.status(500).json({
                error:err
            })
        })

})






//localhost is not working after version 6
mongoose.connect("mongodb://127.0.0.1:27017/glsnode",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log(err)
})


//create server....
const PORT = 3000 // environment 
app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT)
})