function printArr(arr: any[])
{
    let str = '[ ';
    for(let i = 0; i < arr.length; ++i)
        str += arr[i] + ((i < arr.length - 1)?', ':' ');
    str += ']';
    console.log(str);
}

const array = [3, 7, 4];
const mappedArray = array.map((item) => item + 1);

printArr(array);
printArr(mappedArray);

let stringArr = array.map((item: number) => (item +1).toString());
let printableStr = stringArr.reduce((wholeString: string, item: string) => wholeString + ', ' + item);
console.log('[ ' + printableStr + ']');