const arr = [-2, -3, 4, -1, -2, 1, 5, -3]

let maxEnd = 0
let maxSoFar = -Infinity

for (let i of arr) {
    maxEnd += i
    if (maxEnd < i) {
        maxEnd = i
    }
    if (maxSoFar < maxEnd) {
        maxSoFar = maxEnd
    }
}

console.log(maxSoFar)