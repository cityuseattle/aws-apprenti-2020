function loggingIdentity<T>(arg: T []): T[] {
    console.log(arg.length); //Array has a  .length so no error
    return arg;
}

var names:string[] = new Array("A", "b", "C", "D")
loggingIdentity(names)