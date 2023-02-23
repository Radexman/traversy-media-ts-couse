"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Something';
let age;
let ids = ['1', '2', '3', '4', '5'];
ids.push('6');
let arr = [false, 'Hello', 54, null, undefined, ['buraki', 'kartofle'], { name: 'Radek', age: 23 }];
// Tuple
const person = [1, 'Radek', true];
// Tuple Array
let employee = [
    [1, 'Brad', true],
    [2, 'John', false],
    [3, 'Sasha', true],
];
for (let i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}
// Union
const identifier = 22;
// Enum
