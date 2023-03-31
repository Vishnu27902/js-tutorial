

console.time("start")
setTimeout(()=>console.log("Hello"),5000)
console.timeEnd("start")

console.time("start2")
setInterval(()=>{
    console.log(40)
},1)
console.timeEnd("start2")