var employeeId = 2413;
var studentId = 185642;
console.log(typeof employeeId);
console.log(typeof studentId);
//Generic Type parameter (Polymorphic Type parameter)
var a = 1;
var arr = [
    'E line',
    14,
    true
];
function testType(input) {
    var var1;
    var var2;
    var1 = input;
    var2 = input;
    var1 = 'test';
    var2 = 'test';
    console.log(var1);
    console.log(var2);
}
testType(a);
