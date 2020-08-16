function printArr(arr) {
    var str = '[ ';
    for (var i = 0; i < arr.length; ++i)
        str += arr[i] + ((i < arr.length - 1) ? ', ' : ' ');
    str += ']';
    console.log(str);
}
var array = [3, 7, 4];
var mappedArray = array.map(function (item) { return item + 1; });
printArr(array);
printArr(mappedArray);
var stringArr = array.map(function (item) { return (item + 1).toString(); });
var printableStr = stringArr.reduce(function (wholeString, item) { return wholeString + ', ' + item; });
console.log('[ ' + printableStr + ']');
