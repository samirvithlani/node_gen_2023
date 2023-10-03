// console.log("Hello Node...")
// var x = 100
// console.log("x = " + x)

const userData = require('./users/userData')
const fileDemo = require('./fileSystem/FileDemo')

//const user = require('./users/user.js')
//const {userName, userAge, test} = require('./users/user.js')
//console.log("Hello from app.js file...")
//console.log(user)
//user()
// console.log(user.userName)
// console.log(user.userAge)
// user.test()

// console.log(userName)
// console.log(userAge)
// test()

userData.setUserData("ram",100)
var x = userData.getUserData()
console.log("x -->",x)
console.log(userData.getUserData())

//fileDemo.DeleteDemo()
var a = 10
console.log("value of a = ",a)