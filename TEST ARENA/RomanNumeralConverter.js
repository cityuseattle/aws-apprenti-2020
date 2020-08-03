var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var converter = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};
function convertToRoman(num) {
    var i = 0;
    var output = "";
    while (num > 0) {
        var subtract = numbers[i];
        if (subtract > num) {
            i++;
        }
        else {
            num -= subtract;
            output += converter[subtract];
        }
    }
    return output;
}
console.log(convertToRoman(201));
