const employeeModel = require("../models/EmployeeModel.js");

const addEmployee = (req, res) => {};

const getAllEmployees = (req, res) => {
  employeeModel
    .find()
    .then((employees) => {
      res.status(200).json({
        data: employees,
        message: "employees fetched successfully",
      });
    })
    .catch((err) => {
      res.staus(500).json({
        message: err.message,
      });
    });
};

const getEmployeeById = (req, res) => {
  //params --> req-->
  const id = req.params.id; //id

  //employeeModel.find({_id:id})
  employeeModel
    .findById(id)
    .then((employee) => {
      res.status(200).json({
        data: employee,
        message: "employee fetched successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

// const getEmployeeByname = (req,res)=>{

//     const name = req.params.name;

//     employeeModel.find({name:name}).then((employee)=>{
//         res.status(200).json({
//             data: employee,
//             message:"employee fetched successfully"
//         })
//     }).catch((err)=>{
//         res.status(500).json({
//             message: err.message
//         })
//     })

// }

const getEmployeeByname = (req, res) => {
  const name = req.params.name;

  employeeModel
    .find({ name: name })
    .then((employee) => {
      if (employee && employee.length > 0) {
        res.status(200).json({
          data: employee,
          message: "employee fetched successfully",
        });
      } else {
        res.status(404).json({
          data: [],
          message: "employee not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  getEmployeeByname,
};
