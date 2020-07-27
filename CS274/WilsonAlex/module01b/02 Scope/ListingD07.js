// The below excerpt is taken from the 'Get MEAN' book
// It demonstrates some basic variables - function relationships

// This establishes the variable 'firstname' as equalling 'Simon'
var firstname = 'Simon';
// This esablishes the variable 'addSurname' then assigns it to a function:
var addSurname = function () {
    // the function establishes the variables 'surname' to equal 'Holmes'
    surname = 'Holmes';
    // is also leans on the previous two variables to establish 'fullname' as being the two combined names with a space in the middle:
    fullname = firstname + ' ' + surname;
    // the final part of the function 'addSurname' prints the fullname variable.
    console.log(fullname);
};

// the following demonstrates the various functions and their local/global relationships
addSurname();
console.log(firstname + surname);
console.log(fullname);


