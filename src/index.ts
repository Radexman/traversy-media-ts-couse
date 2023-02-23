// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Something';
let age: number;

let ids: string[] = ['1', '2', '3', '4', '5'];
ids.push('6');
let arr: any[] = [false, 'Hello', 54, null, undefined, ['buraki', 'kartofle'], {name: 'Radek', age: 23}];

// Tuple
const person: [number, string, boolean] = [1, 'Radek', true];

// Tuple Array
let employee: [number, string, boolean][] = [
    [1, 'Brad', true],
    [2, 'John', false],
    [3, 'Sasha', true],
]

for (let i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}

// Union
const identifier: string | number = 22;

// Enum
enum Direction1 {
   Up = 1,
   Down,
   Left,
   Right, 
};

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects

// type User = {
//     id: number,
//     name: string,
// }

// const user: User = {
//     id: 1,
//     name: 'John',
// }

type Car = {
    brand: string,
    prodYear: number,
    isElectric: boolean,
    owner: {name: string, age: number},
};

const BMW: Car = {
    brand: 'BMW',
    prodYear: 2007,
    isElectric: false,
    owner: {
        name: 'Emilia',
        age: 20,
    }
}

console.log(BMW);
const {
    brand,
    prodYear,
    isElectric,
} = BMW;

console.log(brand, prodYear, isElectric);

// Type Assertion

let cid: any = 1;
// let customerId = <string>cid;

let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(5, 10));