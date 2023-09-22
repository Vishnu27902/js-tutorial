function Counter() {
    let count = 0;
    this.increment = () => {
        count++
        return count
    }
    this.decrement = () => {
        count--
        return count
    }
}

const counter = new Counter()
console.log(counter.increment())
console.log(counter.decrement())