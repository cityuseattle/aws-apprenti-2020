console.log(`>>> Listing D.8b`);

var firstname = 'Simon';
var addSurname = function () {
  var surname, fullname;
  surname = 'Holmes';
  fullname = `${firstname} ${surname}`;
  console.log(fullname);
};
addSurname();