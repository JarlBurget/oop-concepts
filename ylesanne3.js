class Student{
    #name
    #id 
    #status
    
    constructor(name, id){
     this.#id = id
     this.#name = name
     this.#status = 'Active'
    }
 
    getId(){
     return this.#id
    } 
    
    getName(){
     return this.#name 
    } 
 
    setName(name){
     this.#name = name
    }
    
    setStatus(status){
     const statuses = ['Active', 'Expelled', 'Finished', 'Inactive'] 
     if(statuses.includes(status)){
         this.#status = status
     } 
    } 
 
    getStatus(){
     return this.#status
    } 
 }
 
 const student = new Student('John', 1)
 console.log(student.getName())
 console.log(student.getId())
 student.setName('Mary')
 console.log(student.getName())
 student.setStatus('Vacation')
 console.log(student.getStatus())