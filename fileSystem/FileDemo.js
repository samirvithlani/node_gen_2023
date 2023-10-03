//import fs from 'fs';
const fs = require('fs');

//createFile using writeFile

const DeleteDemo = ()=>{
    

   fs.unlinkSync('abc.txt')

}
module.exports = {
    DeleteDemo
}