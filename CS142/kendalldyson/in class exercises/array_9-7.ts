function calculateTax (amount: number): number {
    return amount * 1.2;

}
function writePrice(product : string, price: number): void {
    console.log('Price for ' + product +': ' +price.toFixed(2));

}
let prices = [];
prices.push(...[100, 75, 421, "20"]);
let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
prices.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(prices[index]));
})