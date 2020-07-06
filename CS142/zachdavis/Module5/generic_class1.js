;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log('Key = ${key}, val = ${val}');
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'ABC');
