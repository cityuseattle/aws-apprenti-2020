function identity<T>(arg: T): T {
    return arg
}

let output = identity<string>("myStringn")
console.log(output)