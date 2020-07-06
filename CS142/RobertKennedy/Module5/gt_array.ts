function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); //Array has a .length, so no more error
    return arg;
}

var names:string[] = new Array("A","B","C","D")
loggingIdentity(names)