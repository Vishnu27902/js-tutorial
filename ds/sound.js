let arr = [2, 7, 4, 1, 8, 1]

while (arr.length > 1) {
    let a = arr[0]
    let b = arr[1]
    let c = a - b > 0 ? a - b : b - a
    arr.shift()
    arr.shift()
    arr.unshift(c)
}

console.log(arr)