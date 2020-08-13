"use strict";
exports.__esModule = true;
exports.street = void 0;
var street = /** @class */ (function () {
    function street(name, speedLimit, lane, isTwoWay) {
        this.name = name;
        this.speedLimit = speedLimit;
        this.lane = lane;
        this.isTwoWay = isTwoWay;
        this.traffic = 0;
    }
    street.prototype.getName = function () {
        return this.name;
    };
    street.prototype.getTraffic = function () {
        return this.traffic;
    };
    street.prototype.increaseTraffic = function (num) {
        this.traffic = num;
    };
    street.prototype.reduceTraffic = function (num) {
        this.traffic = (this.traffic - num > 0) ? (this.traffic - num) : 0;
    };
    street.prototype.printTraffic = function () {
        console.log("There are " + this.traffic + " vehicles on " + this.name + ".");
    };
    return street;
}());
exports.street = street;
