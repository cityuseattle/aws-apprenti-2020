//Type Alias

type Id = number;

let employeeId: Id = 2413;
let studentID: Id = 13722;

console.log(typeof employeeId);
console.log(typeof studentID);

//Generic Type Parameter (polymorphic type parameter)
let a = 1;


function testType<T>(input: T) {
    let var1: any;
    let var2: T;
    var1 = input;
    var2 = input;
    var1= 'test';
    var2= 'test';
    console.log(var1);
    console.log(var2);
}

testType(a);

