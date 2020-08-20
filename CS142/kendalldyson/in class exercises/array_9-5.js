function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log('Price for ' + product + ': ' + price.toFixed(2));
}
var prices = [100, 75, 421];
var names = ["Hat", "Gloves", "Umbrella"];
prices.forEach(function (price, index) {
    writePrice(names[index], calculateTax(prices[index]));
});
