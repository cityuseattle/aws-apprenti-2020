function printArr(arr) {
    var str = '[';
    for (var i = 0; i < arr.length; i++)
        str += arr[i] + ((i < arr.length - 1) ? ',' : ' ');
    str += ']';
    console.log(str);
}
var array = [3, 7, 4];
var mappedArray = array.map(function (item) { return item + 1; });
printArr(array);
printArr(mappedArray);
var stringArr = array.map(function (item) { return (item + 1).toString(); });
var printablestr = stringArr.reduce(function (wholeString, item) { return wholeString + ', ' + item; });
console.log('[' + printablestr + ' ]');
var verbs = [
    {
        positive: true,
        content: 'praise'
    },
    {
        positive: false,
        content: 'dropkick'
    },
    {
        positive: true,
        content: 'p'
    },
    {
        positive: true,
        content: 'help'
    },
    {
        positive: false,
        content: 'punch'
    }
];
var bePositive = verbs.filter(function (s) { return s.positive; });
var positiveVerbs = bePositive.map(function (item) { return item.content; });
var positiveStr = positiveVerbs.reduce(function (combined, item) { return combined + '/' + item; });
console.log('I will ' + positiveStr + ' you.');
