let a = [0, 1, 32, 0, 23, 1, 0]
let i = 0
let j = 1
while (j < a.length) {
    if (a[i] != 0) {
        i++
        continue
    }
    if (a[j] == 0) {
        j++
        continue
    }
    a[i] = a[j]
    a[j] = 0
}
console.log(a)