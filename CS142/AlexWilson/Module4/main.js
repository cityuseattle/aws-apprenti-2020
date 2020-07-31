"use strict";
exports.__esModule = true;
var Street_js_1 = require("./Street.js");
var vehicle_js_1 = require("./vehicle.js");
var wallStreet = new Street_js_1.Street('Wall Street', 25, 3, false);
var tesla = [new vehicle_js_1.Car(true, 5, 'Electric', 20)];
var toyota = [new vehicle_js_1.Car(true, 5, 'Hybrid', 25), new vehicle_js_1.Car(true, 5, 'Gasoline', 22)];
var honda = [new vehicle_js_1.Motorcycle(true, 1, 'Gasoline', 23)];
wallStreet.increaseTraffic(tesla.length + toyota.length + honda.length);
wallStreet.printTraffic();
toyota[1].setSpeed(70);
toyota[1].drift();
