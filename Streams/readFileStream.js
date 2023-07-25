const fs = require("fs");

// const data = fs.readFileSync(__dirname + "/sample.txt", "utf-8")
// console.log(data);

(async () => {
    fs.readFile(__dirname + "/sample.txt", "utf-8", (err, data) => {
        console.log(data)
    })
})()
