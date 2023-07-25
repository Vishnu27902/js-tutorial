const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.at(-1))
arr.forEach((ele, value, arr) => {
    console.log(ele)
})

console.log(arr.slice(0, 4))

const newArr = [[1, 2, 3], 4]
console.log(newArr.flat())

const regex = /Hello/i

console.log(regex.test("Hello World"))

console.log("hello World".match(regex))