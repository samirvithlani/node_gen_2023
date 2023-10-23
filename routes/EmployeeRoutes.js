const express = require('express');
const router = express.Router(); // router object : used to create the routes , it is a mini express app
const employeeController = require('../controllers/EmployeeController.js');
// rouetr.get("/employee",(req,res)=>{
    
// })
router.get("/employee",employeeController.getAllEmployees);
router.get("/employee/:id",employeeController.getEmployeeById);
router.get("/employee1/:name",employeeController.getEmployeeByname);
module.exports = router;
