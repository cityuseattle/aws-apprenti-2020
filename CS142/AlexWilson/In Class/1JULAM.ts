// let myVar;
// console.log('${myVar} = ' + typeof myVar);
// myVar = 12;
// console.log('${myVar} = ' + typeof myVar);
// myVar = "Hello";
// console.log('${myVar} = ' + typeof myVar);
// myVar = true;
// console.log('${myVar} = ' + typeof myVar);

// console.log(1 + 1);
// console.log(1 + '2');
// let myVar;
// myVar2 = 1 + '2';
// console.log(myVar2);


// This is the example used for annotating types:

// function calculateTax(amount: number): number{
//     return (amount * 1.2).toFixed(2);}
// let price: number = 100;
// let taxAmount: number = calculateTax(price);
// let halfShare: number = taxAmount / 2
// console.log('Full amount in tax: ${taxAmount}');
// console.log('Half share: ${halfShare}');

// function calculateTax(amount: any): any{
//     return (amount * 1.2).toFixed(2);}
// let price = 100;
// let taxAmount = calculateTax(price);
// let halfShare = taxAmount / 2
// console.log('Full amount in tax: ${taxAmount}');
// console.log('Half share: ${halfShare}');

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount *1.2;
    return format ? '$${calcAmount.toFixed(2)}' : calcAmount;
}

let taxAmount = calculateTax(100, false);
let taxString = calculateTax(100, true);
console.log('Full amount in tax: $' + taxAmount);
console.log('Tax string: $' + + taxString);

