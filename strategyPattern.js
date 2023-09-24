function multiple(a, b) {
    return a * b
}

function subtract(a, b) {
    return a - b
}

function add(a, b) {
    return a + b
}

class Context {
    context = null
    constructor(context) {
        this.context = context
    }
    calculate(a, b) {
        return this.context(a, b)
    }
}

const strategy1 = new Context(add)
const strategy2 = new Context(multiple)
const strategy3 = new Context(subtract)
console.log(strategy1.calculate(1, 2))
console.log(strategy2.calculate(1, 2))
console.log(strategy3.calculate(1, 2))