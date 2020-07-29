function loggingIdentity<T> (arg:T):T{
    console.log(arg.length); //Error: T does not have .length
    return arg;
}