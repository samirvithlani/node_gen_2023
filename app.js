const express = require('express')
const app = express()
const mongoose = require('mongoose')

//localhost is not working after version 6

//client --> app.js --> router --> controller --> [model] -->[data ] -->controller --> client
//ROUTER FILE REQUIRE...

const employeeRoutes = require('./routes/EmployeeRoutes.js')


//USE THE ROUTER FILE...
app.use("/employee",employeeRoutes)



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