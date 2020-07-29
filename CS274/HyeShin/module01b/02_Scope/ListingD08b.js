console.log(`>>>Listing D.8b`)

let firstname = 'Simon'; //global
const addSurname = function () { //lexical
    let surname,  //lexical
        fullname;
    surname = 'Holmes';
    fullname = firstname + ' ' + surname;
    console.log(fullname);
};
addSurname();