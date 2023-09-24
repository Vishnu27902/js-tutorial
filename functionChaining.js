function Obj() {
    let counter = 0
    this.increment = () => {
        counter++
        return this
    }
    this.decrement = () => {
        counter--
        return this
    }
    this.display = () => {
        console.log(counter)
    }
}

const counter = new Obj()
counter.increment().increment().increment()
counter.display()