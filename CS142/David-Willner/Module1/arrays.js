function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log('price for ' + product + ': ' + price.toFixed(2));
}
var prices = [100, 75, 421];
var names = ["hat", "gloves", "umbrella"];
prices.forEach(function (price, index) {
    writePrice(names[index], calculateTax(prices[index]));
});
