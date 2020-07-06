//type alias
var employeeId = 2413;
var studentId = 13722;
console.log(typeof employeeId);
console.log(typeof studentId);
//type parameter
var arr = [
    'E line',
    14,
    true
];
function filter(input) {
    console.log(typeof input);
}
arr.forEach(function (item) { return filter(item); });
