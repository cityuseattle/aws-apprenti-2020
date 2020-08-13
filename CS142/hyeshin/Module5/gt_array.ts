function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

var names:string[] = new Array("A","B","C","D")
loggingIdentity(names)

