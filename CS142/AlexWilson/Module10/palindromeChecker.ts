function palindrome(str) {
    const alphanumeric = str
        .toLowerCase()   // Lowercase the input
        .match(/[a-z0-9]/g);   // Remove non-alphanumeric characters
 
    return alphanumeric.join('') === alphanumeric.reverse().join('');
  }   // compare string and reversedString
  
  let result = palindrome('dog');

    if (result = true) {
        console.log("Yup, spelled same front and back.")
    }
    else {
        console.log("Nope, this is a one sided word.")
    }