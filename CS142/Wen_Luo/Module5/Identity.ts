function identity (arg: any): any {
    return arg;
}
let output = identity("MyString");
console.log(output)
console.log(typeof(output))