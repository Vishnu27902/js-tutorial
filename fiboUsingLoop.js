const { stdin, stdout } = require("process");

const readLine = require("readline").createInterface({ input: stdin, output: stdout })

readLine.question("Enter a Number : ", (n) => {
    let [a, b, c] = [0, 1, 0]
    for (let i = 1; i < n; i++) {
        c = a + b
        a = b
        b = c
    }
    console.log(c)
})
