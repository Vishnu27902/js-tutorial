function Employee(name, salary) {
    this.name = name
    this.salary = salary
}

Employee.prototype = {
    getSalary: function () {
        return this.salary
    },
    setSalary: function (salary) {
        this.salary = salary
    },
    visitor: function (visitorFunction) {
        visitorFunction(this)
    }
}

const John = new Employee("John", 20000)
console.log(John.getSalary())
function modifySalary(emp) {
    emp.setSalary(emp.getSalary() + 10000)
}
John.visitor(modifySalary)
console.log(John.getSalary())