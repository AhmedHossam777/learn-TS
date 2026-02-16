//? Tuples

// let arr : string[]
//
// let hero : [string, number]
// //
// hero = ["ahmed", 24]
// hero = ["ali", 25]


// let  arr = [1,2,3,5]

// let arr = [1,2,30,3,5]

// let arr : string[] = ["s", 55]

// let str = "ahmed"
//
// let arr:number[] = [1,2]


//! ENUMS
//
// enum Direction {
//     first = 1,
//     second = 2,
//     third = 3
// }

// enum  Student {
//     mohamed = 'first',
//     ahmed = "second",
//     ali = "third"
// }
//
// let name : string
//
// let Obj : {mohamed: string, Ali: string}
//
// Obj = {
//     Ali : "first",
//     mohamed : "second"
// }
//
//
// console.log()

//! Interfaces
//
// interface Student  {
//     name : string;
//     age : number;
//     grades : number[];
// }
//
interface Response {
    success : boolean,
    user : {
        name : string,
        age : number
    }
}
//
const response : Response = {
    success  : true,
    user : {
        name : "ahmed",
        age : 24
    }
}
//
// const response2: Response = {
//     success : true,
//     user : {
//         name : "ahmed",
//         age : 24
//     }
// }
//
// // response.user.
//
//
// // const  {user} = response2
// const  {user} = response
// console.log(user)

// type Planet = "Earth" | "Mars" | "Jupiter"
//
//
// const p : Planet = "Mars"
// console.log(p)


//! Generics

//
// function printName(name :string) {
//     console.log(name)
// }

// printName("ahmed")
//
// function printSomething<T>(s: T) {
//     console.log(s)
// }
//
// printSomething<number>(5)
// printSomething<string>("ahmed")
// printSomething<boolean>(true)
// printSomething<null>(null)
// printSomething<Response>(response)

interface Person {
    name : string
    age : number
}

interface Student {
    name :string;
    age : number
    grades :number[]
}

const stu : Student = {
    age: 10,
    name : "ali",
    grades: [10,20,30]
}
const per : Person = {
    age: 10,
    name : "ali",
}

function print<T>(p: T){ // p : Student | Person | interface .....
    console.log(p)
}

 print<Student>(stu)
 print<Person>(per)