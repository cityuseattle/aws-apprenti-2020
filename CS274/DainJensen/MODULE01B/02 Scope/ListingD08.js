console.log(`>>>Listing D.8`)
var firstname = 'Simon';
var addSurname = function () {
  var surname = 'Holmes';
  var fullname = firstname + ' ' + surname;     1
  var firstname = 'David';
  console.log(fullname);                        2
};
addSurname();
