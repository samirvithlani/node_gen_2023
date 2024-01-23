const zod = require("zod");

const employeeSchema = zod.object({
  body: zod.object({
    name: zod.string().min(3).max(20),
    email: zod.string().email(),
    age: zod.number().min(18).max(600),
    isActive: zod.boolean(),
    //password: zod.string().min(6).max(20),
    password:zod.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  }).strict(),
});
module.exports = employeeSchema;
