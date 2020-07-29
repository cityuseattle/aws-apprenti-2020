//function loggingIdentity <T>(arg: Array<T>):Array<T>
function loggingIdentity<T>(arg: T[]):T[]{
    console.log(arg.length);
    return arg;
}

var names:string[]=new Array('a','b','c','d')
loggingIdentity(names)