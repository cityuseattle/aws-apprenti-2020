function calculateTax(amount:number): number {
    return amount * 1.2;
}
function writePrice(product:string, price:number):void{
    console.log('Price for'+ product +':'+ price.toFixed(2));

}
enum Product {Hat, Gloves =20, Umbrella}
let productValue: Product = 21;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);