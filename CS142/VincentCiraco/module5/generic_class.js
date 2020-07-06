var keyValuePair = /** @class */ (function () {
    function keyValuePair() {
    }
    keyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    keyValuePair.prototype.display = function () {
        console.log('Key = ' + this.key + ', val = ' + this.val);
    };
    return keyValuePair;
}());
var kvp1 = new keyValuePair();
kvp1.setKeyValue(1, "ABC");
kvp1.display();
var kvp2 = new keyValuePair();
kvp2.setKeyValue("HELLO", "World");
kvp2.display();
