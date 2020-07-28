function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length so no more error
}
var names = new Array("A", "B", "C", "D", loggingIdentiy(names));
