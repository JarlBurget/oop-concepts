class Student {
    constructor(name){
        this.name = name
        this.finished = false
    }
    
    hello(){
        console.log('Hello', this.name, '!')
    } 
} 

const student1 = new Student('John')
const student2 = new Student('Mary')
console.log(student1.name)
console.log(student1.finished)
student1.hello()