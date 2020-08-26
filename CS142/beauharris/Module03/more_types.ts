//type alias

type Id = number;

let employeeId:Id = 2413;
let studentId:Id = 13722;

console.log(typeof employeeId);
console.log(typeof studentId);

//type parameter
let arr = [
    'E line',
    14,
    true
];

function filter<T>(input:T) {
    console.log(typeof input);
}

arr.forEach(item => filter(item));