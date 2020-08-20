"use strict";
exports.__esModule = true;
exports.twoSumsolution = exports.testMap = exports.play = exports.Instrument = void 0;
var Instrument;
(function (Instrument) {
    Instrument["Piano"] = "Piano";
    Instrument["Guitar"] = "Guitar";
    Instrument["Violin"] = "Violin";
    Instrument["Cello"] = "Cello";
})(Instrument = exports.Instrument || (exports.Instrument = {}));
function play(Instrument) {
    console.log('Planying ' + Instrument + '.');
}
exports.play = play;
function testMap() {
    var map = {
        Sam: 'Professor'
    };
    map['Kevin'] = 'TA';
    console.log(map['Sam']);
    console.log(map['Kevin']);
}
exports.testMap = testMap;
function twoSum(nums, target) {
    //....
    return [0, 0];
}
exports["default"] = twoSum;
function twoSumsolution(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; ++i) {
        if (map[target - nums[i]] !== undefined)
            return [map[target - nums[i]], i];
        map[nums[i]] = i;
    }
    return [0, 0];
}
exports.twoSumsolution = twoSumsolution;
