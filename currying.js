function add(a,b,c){
    return a+b+c
}

function add1(a){
    return function add2(b){
        return function add3(c){
            return a+b+c
        }
    }
}

console.log(add(1,2,3))
console.log(add1(1)(2)(3))