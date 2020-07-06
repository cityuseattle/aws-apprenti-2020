function Identity<T>(arg: T): T {
    return arg
}

let outpu = Identity<string>("myString")
console.log(outpu)