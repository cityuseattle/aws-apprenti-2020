// 

// type Alias 

type Id = number;

let employeeID: Id = 2413;
let studentID: Id = 13722;

console.log(typeof employeeID);
console.log(typeof studentID);


// Generic type parameter ( Polymorphic type)

let arr = [
    'E line',
    14,
    true
];

function filter<T>(input: T) {
    console.log(typeof input);
}

arr.forEach(item => filter(item));

// 
let a = 1;

function testType<T>(input: T){
    let var1: any; 
    let var2: any;
    var1 = input;
    var2 = input;
    var1 = 'test';
    var2 = 'test';
    console.log(var1);
    console.log(var2);
}

testType(a);