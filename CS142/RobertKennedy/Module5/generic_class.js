var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setkeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = " + this.key + ", val = " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setkeyValue(1, "ABC");
kvp1.display();
var kvp2 = new KeyValuePair();
kvp2.setkeyValue("Hello", "World");
kvp2.display();
