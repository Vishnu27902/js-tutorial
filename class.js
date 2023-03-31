class Parent{
    constructor(name,id){
        this.id=id;
        this.name=name;
    }
}
class child1 extends Parent{
    constructor(name,id,role){
        super(name,id);
        this._role=role
    }
    set role(role){
        this._role=role;
    }
}

let obj = new child1("Vishnu",1,"FSD")
console.log(obj._role)
console.log(obj)
obj.role="BackEnd"
console.log(obj)