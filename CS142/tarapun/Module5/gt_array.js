function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var names = new Array('a', 'b', 'c', 'd');
loggingIdentity(names);
