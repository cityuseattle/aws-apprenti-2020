function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log('Price for ' + product + ': ' + price.toFixed(2));
}
var prices = [100, 75, 421];
var names = ["Hat", "Gloves", "Umbrella"];
writePrice(names[0], calculateTax(prices[0]));
writePrice(names[1], calculateTax(prices[1]));
writePrice(names[2], calculateTax(prices[2]));
