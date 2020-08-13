;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("key = " + key + ", val = " + val);
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'ABC');
