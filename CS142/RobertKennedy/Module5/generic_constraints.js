function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
