class Person {
    constructor(){
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    } 
}

class Student {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    } 
}

const person1 = new Person()
person1.firstname = 'John'
person1.lastname = 'Dow'
person1.age = 30

const person2 = new Person()
person2.firstname = 'Mary'
person2.lastname = 'Janne'
person2.age = 25

const person3 = new Person()
person3.firstname = 'Steve'
person3.lastname = 'Jobs'
person3.age = 56

const student1 = new Student('Martin', 'Saar', 21)
const student2 = new Student('Kristel', 'Lepp', 18)
const student3 = new Student('Rasmus', 'Tamm', 19)

console.log(person1)
console.log(person2)
console.log(person3)
console.log()
console.log(student1)
console.log(student2)
console.log(student3)