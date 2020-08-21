console.log('>>>Listing D.8b')

let firstname = 'Simon';
const addSurname = function () {
    let surname, 
        fullname;
    surname = 'Holmes';
    fullname = firstname + ' ' + surname;
    console.log (fullname);
}
addSurname();