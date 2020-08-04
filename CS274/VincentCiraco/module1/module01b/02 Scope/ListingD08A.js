var firstname = 'Simon';
var addSurname = function () {
    var surname,
        fullname;
    surname = 'Holmes';
    fullname = firstname + ' ' + surname;
    console.log(fullname);
};
addSurname();
//surname and full name are hoisted to the top of their scope to begin and then the values are declared before the function so the name can be created. 