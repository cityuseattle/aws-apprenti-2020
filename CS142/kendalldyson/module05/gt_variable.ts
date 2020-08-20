function loggingIdentity<T>(arg: T): T {
    console.log(arg.length); //Error: T doesht have .length
    return arg;
}