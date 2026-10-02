"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type annotation
let username = "John";
//another example we dtermine the return type of function
function add(a, b) {
    return a + b;
}
function greet(name) {
    return `Hello ${name}`;
}
console.log(add(20, 34));
console.log(greet("Hello"));
// Type inference
let age = 25;
//age = "25" error type didn't match
//function return type is inferenced
function add2(a, b) {
    return a + b;
}
console.log(add2(10, 24));
//# sourceMappingURL=typesInTs.js.map