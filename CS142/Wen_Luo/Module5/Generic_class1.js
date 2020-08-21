//  Generic Class implements genetic imterface 
;
var kvprocessor = /** @class */ (function () {
    function kvprocessor() {
    }
    kvprocessor.prototype.process = function (key, val) {
        console.log("Key = " + key + ', val = ' + val);
    };
    return kvprocessor;
}());
var proc = new kvprocessor();
proc.process(1, 'ABC');
