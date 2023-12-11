const { sheets } = require("googleapis/build/src/apis/sheets")
const xlsx = require("xlsx")

const readFile = (path)=>{
        const file = xlsx.readFile(path)
        const sheets = file.SheetNames
        var data =[]
        for(let i=0;i<sheets.length;i++){
            const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
            temp.forEach((res)=>{
                data.push(res)
            })

        }
        return data
}
module.exports ={
    readFile
}