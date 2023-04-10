const {readFile,writeFile} = require("fs").promises

const start = async () =>{
    const file1 = await readFile("./module/content/file1.txt","utf8")
    const file2 = await readFile("./module/content/file2.txt","utf8")
    console.log(file1)
    console.log(file2)
}

start()

console.log("Done with Promises and Async Await ")