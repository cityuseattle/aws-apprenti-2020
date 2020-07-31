var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log('Key = ${this.key}, val = ${this.val}');
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "ABC");
kvp1.display();
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("Hellow", "World");
kvp2.display();
// I'm not sure why, but when I run this as javascript, it reads the variables literally like so:
//lexon@3c22fb582218 Module5 % node generic_class.js
// Key = ${this.key}, val = ${this.val}
// Key = ${this.key}, val = ${this.val}
