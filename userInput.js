const readLine = require("readline").createInterface({ input: process.stdin, output: process.stdout })
function fibo(n) {
    if (n < 2) {
        return 1
    }
    return fibo(n - 1) + fibo(n - 2)
}
readLine.question("Enter a Number", (n) => {
    console.log(fibo(n))
})