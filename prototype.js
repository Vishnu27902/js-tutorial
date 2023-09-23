const obj = {
    greet() {
        return this.name
    }
}

const obj2 = {
    name: "Hello"
}

Object.setPrototypeOf(obj, obj2)

console.log(obj.greet())

function Obj3() {
    this.print = function () {
        console.log(this.name)
    }
}

obj3.prototype.name = "Hello"
const o3 = new Obj3()
o3.print()
