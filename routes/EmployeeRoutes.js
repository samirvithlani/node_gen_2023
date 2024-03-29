const express = require('express');
const router = express.Router(); // router object : used to create the routes , it is a mini express app
const employeeController = require('../controllers/EmployeeController.js');
const zodMiddleWare = require('../middleware/ZodMiddleware.js');
const employeeSchema = require('../util/EmployeeValidationSchema.js');
// rouetr.get("/employee",(req,res)=>{
    
// })
router.get("/employee",employeeController.getAllEmployees);
router.get("/employee/:id",employeeController.getEmployeeById);
router.get("/employee1/:name",employeeController.getEmployeeByname);

router.post("/employee",zodMiddleWare(employeeSchema),employeeController.addEmployee);

router.delete("/employee/:id",employeeController.deleteEmployee);
router.put("/employee/:id",employeeController.updateEmployee)
router.post("/login",employeeController.loginEmployee)
router.post("/filter",employeeController.filterEmployee)
module.exports = router;
