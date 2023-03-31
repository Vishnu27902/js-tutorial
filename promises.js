const obj = () => {
    let flag = true;
    return new Promise((resolve , reject)=>{
        if(flag){
            setTimeout(()=>{
                console.log("First Promise")
                resolve({res: "Success"})
            },3000)
        }
        else
        {
            reject({res: "Failure"})
        }
    })
}

obj().then((res)=>{
    return new Promise((resolve,reject)=>{
        if(res.res){
            setTimeout(()=>{
                console.log("Second Promise")
                resolve("Success from Third promise")
            },3000)
        }
        else{
            reject("Failure")
        }
    })
})

.then(res=>{
    console.log(res)
})

.catch(err=>{
    console.log(err)
})