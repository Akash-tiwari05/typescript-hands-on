// Type annotation
let username: string = "John";

//another example we dtermine the return type of function
function add(a: number, b: number): number {
    return a + b;
}


function greet(name: string): string {
    return `Hello ${name}`;
}





// Type inference
let age = 25;

//age = "25" error type didn't match

//function return type is inferenced
function add2(a: number, b: number) {
    return a + b;
}

