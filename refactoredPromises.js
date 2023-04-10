const {readFile,writeFile} = require("fs")

const getfile = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf8",(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}

const asyncfile = async () =>{
    const file1 = await getfile("./module/content/file1.txt")
    console.log(file1)
}

asyncfile()