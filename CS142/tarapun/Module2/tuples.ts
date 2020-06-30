const tupleA:[string]=['Hello Tuple']
const tupleB:[number, string, boolean]=[112,'rgb',true]

//tupleC and tupleD are equivalent
const tupleC:[number, number, number?][]=[
    [12,34],
    [56,78,25],
    [90,12]
]
const tupleD:([number, number]|[number, number, number])[]=[
    [12,34],
    [56,78,25],
    [90,12]
]
//Rest element
const bools:[boolean,...boolean[]]=[true, true, false, true, false];
//A haterogeneous list
const info:[string, number,...boolean[]]=['hello',375,true, false, false, true];
