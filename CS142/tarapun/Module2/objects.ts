let employee:{readonly id:number, name:string}={
    id:501,
    name:'Kevin'
}
console.log(employee.id);
console.log(employee.name);
//employee.id=2502;
employee.name='David'
console.log(employee.id);
console.log(employee.name);