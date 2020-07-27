// named function
function add(a, b) {
    return a + b;
}
// function expression
var multiply = function (a, b) {
    return a * b;
};
//arrow function
var subtract = function (a, b) {
    return a - b;
};
//one line function
var subtract2 = function (a, b) { return a - b; };
//calling functions
console.log(add(1, 2));
console.log(multiply(3, 4));
console.log(subtract(5, 6));
console.log(subtract2(7, 8));
