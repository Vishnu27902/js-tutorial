const { parentPort } = require("worker_threads")

let count = 0
for (let i = 0; i < 100000000000000000; i++) {
    count++
}
res.json({ count })

parentPort.postMessage(count)