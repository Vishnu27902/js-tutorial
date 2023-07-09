// Generator Functions

function* generate() {
    yield 1
    yield 2
}

const data = generate()

while (true) {
    const res = data.next()
    if (res.done)
        break
    console.log(res.value)
}