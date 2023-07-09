const { fork } = require("child_process")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    const child_process = fork("./heavyLoad.js")
    child_process.on("message", (data) => {
        res.json({ count: data })
    })
})

app.get("/heavy", (req, res) => {
    res.json({ count: 1 })
})

app.listen(5000, (req, res) => {
    console.log("Server Listening at PORT 5000")
})