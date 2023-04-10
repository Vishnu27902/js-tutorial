const {createReadStream} = require("fs")

const stream = createReadStream("./module/content/bigfile.txt",{highWaterMark:24000,encoding:"utf8"})

stream.on("data",(data)=>           //64kb
console.log(data))