var employeeId = 2413;
var studentId = 13722;
console.log(typeof employeeId);
console.log(typeof studentId);
//Generic Type Parameter (Polymorphic Type Parameter)
var arr = [
    "E line",
    14,
    true
];
function filter(input) {
    console.log(typeof input);
}
arr.forEach(function (item) { return filter(item); });
//Task 3
var a = 1;
function testType(input) {
    var var1;
    var var2;
    var1 = input;
    var2 = input;
    var1 = "test";
    var2 = "test";
    console.log(var1);
    console.log(var2);
}
testType(a);
