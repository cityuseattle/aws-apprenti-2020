// Type Alias
type Id=Number;

let employeeId:Id=2413
let studentId:Id=185642

console.log(typeof employeeId);
console.log(typeof studentId)

//Generic Type parameter (Polymorphic Type parameter)
let a=1
let arr=[
    'E line',
    14,
    true
];
function testType<T>(input:T)
{ 
    let var1:any;
    let var2:any;
    var1=input;
    var2=input;
    var1='test'
    var2='test'
    console.log(var1);
    console.log(var2);
}
testType(a)