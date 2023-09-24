let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Iterator(array) {
    this.array = array
    this.index = 0
}

Iterator.prototype = {
    next() {
        return this.array[this.index++]
    },
    hasNext() {
        return this.index != this.array.length
    }
}

const iter = new Iterator(array)
while (iter.hasNext()) {
    console.log(iter.next())
}