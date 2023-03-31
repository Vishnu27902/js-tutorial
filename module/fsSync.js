const {readFileSync,writeFileSync, read, readFile} = require("fs")

const file1 = readFileSync("./module/content/file1.txt","utf8")
const file2 = readFileSync("./module/content/file2.txt","utf8")

console.log(file1+"\n"+file2)

writeFileSync("./module/content/file3.txt",`content of file 1 :${file1} \n content of file 2 :${file2}`)

writeFileSync("./module/content/file4.txt",` keeps of appending the file `,{flag: 'a'})