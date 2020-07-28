var firstname = 'Simon';
var addSurname = function () {
  surname = 'Holmes';                      
  fullname = firstname + ' ' + surname;    
  console.log(fullname);
};
addSurname();
console.log(firstname + surname);          
console.log(fullname);                     

//local scope is when a variable is only accessible within a function.
//global scope is when an variable is accessible within the entire web page/it is declared outside a function. 
//lexical scope is when a variable defined outside a function can be accessible inside another function after the variable decloration 