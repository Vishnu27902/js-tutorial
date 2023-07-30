var s1 = 12
let s2 = 112

const func = () => {
    var s1 = 1
    let s2 = 112
    console.log("Inside Function")
}

var s1 = 10
//let s2=12 //Error

func()
console.log(s1)