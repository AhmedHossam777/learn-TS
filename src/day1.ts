//? variables, arrays, object, functions

//* number, string, bool, undefined, null, any

// let x: number = 90;
// let str: string = 'ahmed hossam';
// let isTrue: boolean = false;
// let NullValue: null = null;

// let x = 'ahmed';

//! Arrays

// let arr: number[];

// arr = [1, 2, 3, 4];
let arr : number[]
arr = [1,2,390]


let variable : number
let variable1 : string


let setArr : string[]
setArr = ["ahmed", "c", "mohamed"]

let arrr : boolean[]
arrr = [true, false , false]
//! Objects
// let obj = {
// 	name: 'ahmed',
// 	age: 24,
// };


let obj : {name : string, age : number}
obj = {
    name : "ahmed",
    age : 24
}

console.log(obj)

// player = {
// 	name: 'ahmed',
// 	level: 1,
// 	isOnline: true,
// };

//! Functions


// console.log(sum(10, 20));

//! AVIOD ANY
// let x;
//
// let x: string = 'ahmed';
// const str = 'mohamed';
// console.log(str.length);
//
// console.log(x.length);


function printName(name : string): string{
    console.log(name)

    return name
}

printName("ahmed")