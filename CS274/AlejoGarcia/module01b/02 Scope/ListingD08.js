var firstname = 'Simon';
var addSurname = function() {
    var surname = 'Holmes';
    var fullname = firstname + ' ' + surname;
    var firstname = 'David';
    console.log(fullname);
};
addSurname();