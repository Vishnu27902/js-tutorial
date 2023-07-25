const { Worker } = require("worker_threads")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Instant Page")
})

app.get("/high", (req, res) => {
    const worker = new Worker(__dirname + "/worker.js")
    worker.on("message", (data) => {
        console.log(data)
        res.send(data.result)
    })
})

app.listen(5000, () => {
    console.log("Server Running in PORT 5000")
})