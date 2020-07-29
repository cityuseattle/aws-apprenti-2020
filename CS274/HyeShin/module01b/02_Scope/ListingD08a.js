console.log(`>>>Listing D.8a`)

var firstname = 'Simon'; //global
var addSurname = function () {
    var surname,  //function scope
        fullname; //function scope
    surname = 'Holmes';
    fullname = firstname + ' ' + surname;
    console.log(fullname); 
};
addSurname();