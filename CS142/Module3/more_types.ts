//Type Alias
type Id = number;

let employeeId: Id = 2413;
let studentId: Id = 13722;

console.log(typeof employeeId);
console.log(typeof studentId);

//Generic Type Parameter (Polymorphic Type Parameter)
let arr = [
    "E line",
    14,
    true
];

function filter<T>(input: T){
    console.log(typeof input);
}

arr.forEach(item => filter(item));

//Task 3

let a = 1;

function testType<T>(input: T){
    let var1: any;
    let var2: T;
    var1 = input;
    var2 = input;
    var1 = "test";
    var2 = "test";
    console.log(var1);
    console.log(var2);
}
testType(a);
//purposedly supposed to get an error for the practice