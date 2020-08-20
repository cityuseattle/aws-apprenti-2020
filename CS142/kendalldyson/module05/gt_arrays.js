function loggingIdentity(arg) {
    console.log(arg.length); //Array has a  .length so no error
    return arg;
}
var names = new Array("A", "b", "C", "D");
loggingIdentity(names);
