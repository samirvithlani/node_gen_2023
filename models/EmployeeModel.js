//mongoose....
const mongoose = require("mongoose");
//schema schema class...
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

//model
// const employeeModel = mongoose.model("Employee", employeeSchema);
// module.exports = employeeModel;

module.exports = mongoose.model("Employee", employeeSchema);