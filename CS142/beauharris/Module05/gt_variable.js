function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var names = new Array('A', 'B', 'C', 'D');
loggingIdentity(names);
