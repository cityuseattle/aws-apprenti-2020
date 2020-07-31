function loggingIdentity1(arg) {
    console.log(arg.length); //Array has a .length, so no more error
    return arg;
}
var names = Array("A", "B", "C", "D");
loggingIdentity1(names);
