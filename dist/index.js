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
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const BMW = {
    brand: 'BMW',
    prodYear: 2007,
    isElectric: false,
    owner: {
        name: 'Emilia',
        age: 20,
    }
};
console.log(BMW);
const { brand, prodYear, isElectric, } = BMW;
console.log(brand, prodYear, isElectric);
// Type Assertion
let cid = 1;
// let customerId = <string>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
