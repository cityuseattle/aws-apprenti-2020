var firstname = 'Simon';
var addSurname = function () {
  var surname = 'Holmes';
  var fullname = firstname + ' ' + surname;  
  console.log(fullname)   
  var firstname = 'David';
  console.log(fullname);                        
};
addSurname();

//this doesnt work because js hoists the declearation to the top of the scope before it has a value assigned to it. 