var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log('key = ' + this.key + ' value = ' + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "USA");
kvp1.display();
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("Two", "UK");
kvp2.display();
