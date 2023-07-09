//Optional Chaining

let a = {
    name: {
        firstname: "Vishnu",
        lastname: "Varadhan"
    },
    age: 20
}
let b = {
    age: 20
}

console.log(a?.name?.firstname)
console.log(b?.name || "Name doesn't Exist")