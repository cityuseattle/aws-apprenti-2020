function loggingIdentity<T>(arg: T): T {
    console.log(arg.length): // Error doesn't have .length
    return arg;
}