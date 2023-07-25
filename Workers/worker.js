const { parentPort } = require("worker_threads")

for (let i = 0; i < 10000000000; i++);

parentPort.on("message", { result: "Slow Page" })