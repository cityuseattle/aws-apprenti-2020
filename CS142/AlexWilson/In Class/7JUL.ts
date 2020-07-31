// public

import { resolve } from "path";

// class Employee {
//     public empCode: number;
//     empName: string;
// }
// let emp = new Employee();
// emp.empCode = 123;
// emp.empName = "Swati";

// private

// class Employee {
//     private empCode: number;
//     empName: string;
// }
// let emp = new Employee();
// emp.empCode = 123;
// emp.empName = "Swati";

// protected

// class Employee {
//     public empName: string;
//     protected empCode: number;

//     constructor(name: string, code: number) {
//         this.empName = name;
//         this.empCode = code;
//     }
// }
// class SalesEmployee extends Employee {
//     private department: string;

//     constructor(name: string, code: number, department: string) {
//         super(name, code);
//         this.department = department;
//         this.code = this.empCode
//     }
// }
// let emp = new SalesEmployee("John Smith", 123);

// Generic Types

// let arr = ['E line', 14, true];
// function filter<T>(input: T) {
//     console.log(typeof input);
// }
// arr.forEach(item => filter(item));

// different section
// let a = 1;
// function testType <T>(input : T) {}


//icallback
// interface iCallback {
//     ( error: Error, result?: number ) : void;
// }

// function getRandomNumber (callback: iCallback) : void {
//     var value = Math.random();
//     ( value >= 0.5)
//     ? callback (null, value)
//     : callback (new Error ("random number too low"))
//     ;
// }

// for ( var i = 0; i < 10; i++ ) {
//     getRandomNumber(
//         (error : Error, result: number ) : void => {
//             console.log(`${i}:`, (result || error.message));
//         }
//     )
// }

// promise

function asyncMethod(callBack) {
    setTimeout(() => {
        console.log("Async Callback");
        callBack();
    }, 1500);
}

asyncMethod(() => console.log("Async Callback Completed"));

var promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Async is done")
        resolve();
    }, 1500);
    
});