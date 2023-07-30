const fs=require("fs")

const readStream=fs.createReadStream(__dirname+"/sample.txt")
const writeStream=fs.createWriteStream(__dirname+"/hello.txt")

readStream.on("data",(chunk)=>{
    console.log(chunk.toString("utf-8"))
})

readStream.pipe(writeStream)
