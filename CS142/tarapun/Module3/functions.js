//named Function
function add(a, b) {
    return a + b;
}
//Function expression 
var multiply = function (a, b) {
    return a * b;
};
//Array Function Expression
var subtract = function (a, b) {
    return a - b;
};
//shorten arrow function expression
var subtract2 = function (a, b) { return a - b; };
//call the functions
console.log(add(2, 2));
console.log(multiply(2, 2));
console.log(subtract(2, 2));
console.log(subtract2(2, 2));
