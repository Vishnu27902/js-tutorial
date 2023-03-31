const path = require("path")
console.log(path.sep)

console.log(__dirname)

console.log(__filename)

filePath=path.join("hello","hi","hi.txt")

console.log(path.basename(filePath))

console.log(path.resolve(__dirname));