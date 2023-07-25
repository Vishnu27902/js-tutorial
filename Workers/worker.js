const { parentPort } = require("worker_threads")

for (let i = 0; i < 100000000; i++);

parentPort.postMessage("Slow Page")