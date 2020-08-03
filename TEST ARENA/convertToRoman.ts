function convertToRoman(num: number) {
    let i = 0;
    let output = "";
    while (num > 0) {
        const subtract = numbers[i];
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
