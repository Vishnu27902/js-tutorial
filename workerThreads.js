const { Worker } = require("worker_threads")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    const worker = new Worker("./heavyLoad.js")
    worker.on("message", (data) => {
        res.json({ data })
    })
})

app.get("/heavy", (req, res) => {
    let count = 0
    count++
    res.json({ count })
})

app.listen(5000, () => {
    console.log("Server Listening at PORT 5000")
})