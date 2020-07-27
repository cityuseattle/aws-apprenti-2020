// named function
function add(a: number, b: number): number {
    return a + b;
}
// function expression
const multiply = function(a: number, b: number): number {
    return a * b;
}
//arrow function
const subtract = (a:number, b:number):number => {
    return a - b;
}
//one line function
const subtract2 = (a:number, b:number):number => a - b;

//calling functions
console.log(add(1,2));
console.log(multiply(3,4));
console.log(subtract(5,6));
console.log(subtract2(7,8));