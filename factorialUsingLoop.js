const {stdin,stdout}=require("process")
const readLine=require("readline").createInterface({input:stdin,output:stdout})

readLine.question("Enter a Number : ",(n)=>{
    let res=1
    for(let i=1;i<=n;i++){
        res*=i
    }
    console.log(res)
})