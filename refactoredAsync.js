const {readFile,writeFile} = require("fs")
const util = require('util')

const readFileP = util.promisify(readFile)
const writeFileP = util.promisify(writeFile)

const start = async () =>{
    const file1 = await readFileP("./module/content/file1.txt","utf8")
    const file2 = await  readFileP("./module/content/file2.txt","utf8")
    console.log(file1)
    console.log(file2)
}

start()

