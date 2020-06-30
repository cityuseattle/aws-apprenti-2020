// Optional Parameters
function doSomething(action, objstr) {
    console.log(action, (objstr || 'nothing') + '.');
}
doSomething('Read');
doSomething('Read', 'a book');
// Default Parameters
function printSomething(noun, times) {
    if (times === void 0) { times = 5; }
    for (var i = 0; i < times; i++) {
        console.log(noun);
    }
}
printSomething('Car');
printSomething('Carpet', 3);
