const fs=require("fs")

const readerStream=fs.createReadStream(__dirname+"/sample.txt")
const writeStream=fs.createWriteStream(__dirname+"/write.txt")

readerStream.pipe(writeStream)