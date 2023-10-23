// // console.log("Hello Node...")
// // var x = 100
// // console.log("x = " + x)

// const userData = require('./users/userData')
// const fileDemo = require('./fileSystem/FileDemo')

// //const user = require('./users/user.js')
// //const {userName, userAge, test} = require('./users/user.js')
// //console.log("Hello from app.js file...")
// //console.log(user)
// //user()
// // console.log(user.userName)
// // console.log(user.userAge)
// // user.test()

// // console.log(userName)
// // console.log(userAge)
// // test()

// userData.setUserData("ram",100)
// var x = userData.getUserData()
// console.log("x -->",x)
// console.log(userData.getUserData())

// //fileDemo.DeleteDemo()
// var a = 10
// console.log("value of a = ",a)
// //MERN  ---> E EXPRESS  -> middleware
// //Server --> reqest -->  --> response --> client tomcat , apcahe
// //express nest

// // const http = require('http');
// // const server = http.createServer((req,res)=>{
// //     console.log(req.url);
// // })
// // server.listen(3000,()=>{
// //     console.log('Server is running on port 3000');
// // });

// const employeeModel = require("./models/EmployeeModel")


// //GET,POST,PUT,PATCH,DELETE
// // GET - to get the data from server, browser.....
// // POST - to send the data to server
// // PUT - to update the data
// // PATCH - to update the data
// // DELETE - to delete the data

// app.get("/employee",(req,res)=>{

//     console.log("Employee API is called")
//     //res.send("Employee API is called")
//     res.status(200).json({
//         message:"Employee API is called"
//     })
// })

// app.get("/emp",(req,res)=>{


//         employeeModel.find()
//             .then((data)=>{
//             res.status(200).json({
//                 employee:data,
//                 message:"Employee fetched successfully"
//             })
//         })
//         .catch((err)=>{
//             res.status(500).json({
//                 error:err
//             })
//         })

// })





