const {readFile,writeFile} = require("fs")

readFile("./module/content/file1.txt","utf8",(err,res)=>{
    if(err){
        console.log("File not found")
        return;
    }
    else{
        const res1=res
        readFile("./module/content/file2.txt","utf8",(err,res)=>{
            if(err){
                console.log("File not found")
                return;
            }
            else{
                const res2 = res
                writeFile("./module/content/file5.txt",`${res1} ${res2}`,(err,res)=>{
                    if(err){
                        console.log("Error occured")
                        return;
                    }
                    else{
                        console.log("successfully done callbacks")
                    }
                })
            }
        })
    }
})