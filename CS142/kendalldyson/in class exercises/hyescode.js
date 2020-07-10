function palindrome(str) {
    var alphanumeric = str
        .toLowerCase() // Lowercase the input
        .match(/[a-z0-9]/g); // Remove non-alphanumeric characters
    return alphanumeric.join('') === alphanumeric.reverse().join('');
} // compare string and reversedString
var result = palindrome('five|\_/|four');
console.log(result);
