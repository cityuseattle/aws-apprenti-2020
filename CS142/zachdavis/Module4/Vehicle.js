"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Motorcycle = exports.Car = exports.Vehcile = void 0;
var Alexa_1 = require("./Alexa");
var Vehcile = /** @class */ (function () {
    function Vehcile(started, seat, power, speed) {
        this.started = started;
        this.seat = seat;
        this.power = power;
        this.speed = speed;
        started = true;
    }
    Vehcile.prototype.is0n = function () {
        return this.started;
    };
    Vehcile.prototype.getSeat = function () {
        return this.seat;
    };
    Vehcile.prototype.getPower = function () {
        return this.power;
    };
    Vehcile.prototype.getSpeed = function () {
        return this.speed;
    };
    Vehcile.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Vehcile;
}());
exports.Vehcile = Vehcile;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drift = function () {
        Alexa_1.Alexa.play('Deja Vu');
    };
    return Car;
}(Vehcile));
exports.Car = Car;
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehcile));
exports.Motorcycle = Motorcycle;
