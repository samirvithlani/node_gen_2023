const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//middleware
app.use(express.json()) // body parser --> req.body
app.use(express.urlencoded({extended:true})) // req.body
app.use(cors()) // cross origin resou



//client --> app.js --> router --> controller --> [model] -->[data ] -->controller --> client
//ROUTER FILE REQUIRE...

const employeeRoutes = require('./routes/EmployeeRoutes.js')
const roleRoutes = require('./routes/RoleRoutes.js')
const userRoutes = require('./routes/UserRoutes.js')
const permissionRoutes = require('./routes/PermissionRoutes.js')
const uploadRoutes = require('./routes/UploadRoutes.js')


//USE THE ROUTER FILE...
app.use("/employee",employeeRoutes)
app.use("/role",roleRoutes)
app.use("/user",userRoutes)
app.use("/permission",permissionRoutes)
app.use("/upload",uploadRoutes)


//localhost is not working after version 6
mongoose.connect("mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/glsnode",{
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