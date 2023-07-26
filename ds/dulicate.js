const arr = [0, 0, 1, 2, 2, 1, 3, 3]

let res = 0;
for (let i of arr) {
    res ^= i
}

console.log(res)