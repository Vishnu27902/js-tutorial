const { log } = require("console")
const os=require("os")

console.log(os.cpus().length)
console.log(os.platform())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os.tmpdir())
console.log(os.type())
log(os.arch())