//  Identity.ts

function identity(arg: any): any {
    return arg;
}

let output = identity("myString");
console.log(output)
console.log(typeof(output))

