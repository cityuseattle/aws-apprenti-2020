console.log(`>>>Listing D.27`)

const firstname = 'Simon';
let surname;
if (firstname === 'Simon') {
    surname = 'Holmes';
    console.log(`${firstname} ${surname}`);
}

function returnFullname() {
    var name = 'AJ Garcia';
    return `{ name : '${name}' }`
}
console.log(returnFullname());