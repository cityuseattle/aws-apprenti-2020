
const tupleA: [string] = ['Hello Tuple'];
const tupleB: [number, string, boolean] = [135, 'rbg', true];

// tupleC and tupleD are equivelent
const tupleC: [number, number, number?][] = [
    [12, 34],
    [56, 78, 25],
    [90,12]
];
const tupleD: ([number, number] | [number, number, number])[] = [
    [12,34],
    [56, 78, 25],
    [90,12]
];

// Rest elements
const bools: [boolean, ...boolean[]] = [true, true, false, true, false];

// A heterogeneous list
const info: [string, number, ...boolean[]] = ['Hellp', 372, true, false, true, true];