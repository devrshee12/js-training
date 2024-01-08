// Problem Statement:
// You are tasked with implementing a simple system for managing employees. Each employee has a name, an age, and a role. You need to create a prototype-based solution to efficiently handle the creation and management of employee objects.

// Define a constructor function Employee that takes name, age, and role as parameters and assigns them to the created object.

// Add a method displayInfo to the prototype of the Employee constructor. This method should log a string with the employee's information (name, age, and role).

// Create instances of the Employee object representing three employees.

// Use the displayInfo method to display the information for each employee.


function Employee(empName, age, designation){
    this.empName = empName;
    this.age = age;
    this.designation = designation
}


Employee.prototype.displayInfo = function(){
    return `Name of Employee is ${this.empName} \n Age of Employee is ${this.age} \n Designation of Employee is ${this.designation}`
}

const emp1 = new Employee("alice", 30, "Developer")
const emp2 = new Employee("bob", 31, "Designer")
const emp3 = new Employee("charlie", 32, "Tester")

console.log(emp1.__proto__);

console.log(emp1.displayInfo());
console.log(emp2.displayInfo());
console.log(emp3.displayInfo());
