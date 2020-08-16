function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

var names:string[] = new Array ("A","B","C","D")
loggingIdentity(names)