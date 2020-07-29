"use strict";
exports.__esModule = true;
exports.twoSumSolution = exports.testMap = exports.play = exports.Instrument = void 0;
var Instrument;
(function (Instrument) {
    Instrument["Piano"] = "Piano";
    Instrument["Guitar"] = "Guitar";
    Instrument["Violin"] = "Violen";
    Instrument["Cello"] = "Cello";
})(Instrument = exports.Instrument || (exports.Instrument = {}));
function play(instrument) {
    console.log('Playing ' + instrument + '.');
}
exports.play = play;
function testMap() {
    var map = {
        Sam: 'Professor'
    };
    map['Kevin'] = 'TA';
    console.log(map['Sa,']);
    console.log(map['Kevin']);
}
exports.testMap = testMap;
function twoSum(sum, target) {
    //..
    return [0, 0];
}
exports["default"] = twoSum;
function twoSumSolution(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
    return [0, 0];
}
exports.twoSumSolution = twoSumSolution;
