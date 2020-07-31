function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length); //Array has a .length, so no more error
    return arg;
}

var names:string[] = Array("A","B","C","D")
loggingIdentity1(names)

