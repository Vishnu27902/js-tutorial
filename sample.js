// const obj = {
//     name: "Vishnu",
//     age: 20,
//     greet: function () {
//         console.log("Hello " + this.name);
//     }
// }

// obj.greet()

// function greeting() {
//     console.log("Welcome " + this.name)
// }

// greeting.call(obj)
// greeting.apply(obj)
// const newGreeting = greeting.bind(obj)
// newGreeting()

// console.log(typeof {})
function hi() {
    return { message: "Hello World" }
}
console.log(hi())