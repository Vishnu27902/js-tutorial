class singleton {
    static instance=null
    constructor(){
        
    }
}

const obj1 = new singleton()
console.log(singleton.obj)
const obj2 = new singleton()
console.log(singleton.obj)