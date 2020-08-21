export enum Instrument {
    Piano = 'Piano',
    Guitar = 'Guitat',
    Violin = 'Violin',
    Cello = 'Cello',
}

export function play(Instrument: Instrument) {
    console.log('Playing' + Instrument + '.');
}

export function testMap() {
    let map: {
        [name: string]: string;
    } = {
        Sam: 'Professor',
    };
    map['Kevin'] = 'TA';
    console.log(map['Sam']);
    console.log(map['Kevin']);
}

export default function twoSum(nums: number[], target: number) {
    return [0,0];
}

export function twoSumSolution(nums: number[], target: number) {
    let map: {
        [number: string]: number;
    } = {};
    for (let i = 0; i < nums.length; ++ i)
    {
        if(map[target - nums[i]] !== undefined)
            return [map[target- nums[i]], i];
        map[nums[i]] = i;
    }

    return [0,0];
}