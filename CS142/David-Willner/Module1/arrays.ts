function calculateTax(amount:number): number {
    return amount * 1.2;
}
function writePrice(product: string, price:number): void{
    console.log('price for ' + product+ ': ' + price.toFixed(2));
    }
let prices: number[] = [100, 75, 421]
let names: Array<string> = ["hat", "gloves","umbrella"];

prices.forEach((price:number, index:number) =>{
writePrice(names[index], calculateTax(prices[index]));
})