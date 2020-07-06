function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}