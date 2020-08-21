// 
var employeeID = 2413;
var studentID = 13722;
console.log(typeof employeeID);
console.log(typeof studentID);
// Generic type parameter ( Polymorphic type)
var arr = [
    'E line',
    14,
    true
];
function filter(input) {
    console.log(typeof input);
}
arr.forEach(function (item) { return filter(item); });
// 
var a = 1;
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
