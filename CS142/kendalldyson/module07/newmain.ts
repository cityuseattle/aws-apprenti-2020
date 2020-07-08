import * as dolt from './Do_something';
import twoSum from './Do_something';

dolt.play(dolt.Instrument.Piano);
dolt.testMap();

interface Input {
    arr: number[]
    target: number
}

let input: Input [] = [
    {arr: [3, 8, 12, 2], target: 11},
    {arr: [7, 4, 7], target: 14},
    {arr: [-3, 4, 8, 3], target: 0},
    {arr: [1, 0, 7, 0], target: 0},
];

input.forEach(item => {
    console.log('My Answer:', twoSum(item.arr,item.target));
    console.log('Solution: ', dolt.twoSumsolution(item.arr,item.target));

});