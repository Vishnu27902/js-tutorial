const cluster = require("cluster")
const express = require("express")
const app = express()


if (cluster.isMaster) {
    console.log(`Master Process Running`)
    cluster.fork()
    cluster.fork()
} else {
    console.log(`Worker Thread running with ID ${process.pid}`)
    app.get("/low", (req, res) => {
        res.send("Instant Page")
    })
    app.get("/high", (req, res) => {
        for (let i = 0; i < 100000000000000000; i++){
            // Do some CPU intensive task here...
        }
        res.send("Slow Page")
    })
    app.listen(5000, () => {
        console.log("Server Listening to PORT 5000")
    })
}