const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  age: {
    type: Number,
  },
  role:{
        type: Schema.Types.ObjectId,
        ref: "Role"
  },
  permissions: [
    {
    type: Schema.Types.ObjectId,
    ref: "Permission"
  }
],
  password: {
    type: String,
  }

});
//role
//1 admin 
//user
//name email age 1
//create table user (name,emaol.age, role inr,REFERENCE Role(id))
module.exports = mongoose.model("User", userSchema);