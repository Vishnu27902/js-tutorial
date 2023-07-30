function add() {
    let a = 1
    function inc() {
        return a++
    }
    return inc
}

const inc = add()
console.log(inc())
console.log(inc())
console.log(inc())

function add1() {
    let a = 1
    return a++
}

console.log(add1())
console.log(add1())
console.log(add1())