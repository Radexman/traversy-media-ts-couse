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
