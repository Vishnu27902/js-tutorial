// Sync - linear
// Async - non-linear

console.log("Start")
console.log("This is an Sync code");
console.log("End")

console.log("Start")
setTimeout(()=> console.log("This is an Asyncronize Code"))
console.log("End")