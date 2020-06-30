//named Function
function add(a:number, b:number):number
{
    return a+b;
}
//Function expression 
const multiply= function(a:number, b:number):number
{
    return a*b;
}
//Array Function Expression
const subtract = (a:number, b:number):number=>
{
    return a-b;
}
//shorten arrow function expression
const subtract2= (a:number, b:number):number=>a-b;

//call the functions
console.log(add(2,2))
console.log(multiply(2,6))
console.log(subtract(2,2))
console.log(subtract2(2,2))