function Developer(name) {
    this.name = name
    this.role = "Developer"
}

function Tester(name) {
    this.name = name
    this.role = "Tester"
}

class EmployeeFactory {
    createEmployee(name, role) {
        switch (role) {
            case "Developer":
                return new Developer(name)
            case "Tester":
                return new Tester(name)
        }
    }
}

function display() {
    console.log(`Hi I'm ${this.name} and I'm a ${this.role}`)
}
const employeeFactory = new EmployeeFactory()
const employees = []
employees.push(employeeFactory.createEmployee("James", "Tester"))
employees.push(employeeFactory.createEmployee("Jack", "Developer"))
employees.push(employeeFactory.createEmployee("David", "Developer"))
employees.push(employeeFactory.createEmployee("Joss", "Tester"))
employees.push(employeeFactory.createEmployee("Michel", "Developer"))

for (let employee of employees) {
    display.call(employee)
}