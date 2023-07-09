process.on("message", (req, res) => {
    process.send(heavyLoad())
})

function heavyLoad() {
    let count = 0
    for (let i = 0; i < 10000000000000000; i++) {
        count++
    }
    return count
}