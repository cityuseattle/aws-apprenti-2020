function identity<T>(arg: T): T {
    return arg
}

let output = identity("myString")
console.log(output)