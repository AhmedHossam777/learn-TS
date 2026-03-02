class User {
    name: string = ""
    age : number = 0

    constructor(name: string, age: number) {
        console.log("constructor called")
        this.name = name
        this.age = age
    }

}

//! constructor

const user = new User("ahmed", 18)
const user2 = new User("ali", 24)



console.log(user.name)
console.log(user.age)

console.log(user2.name)
console.log(user2.age)

// class Student : name:string, age:number, subject []sting
// methods: calcBirthYear, logData