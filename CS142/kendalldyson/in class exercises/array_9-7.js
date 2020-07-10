function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log('Price for ' + product + ': ' + price.toFixed(2));
}
var prices = [];
prices.push.apply(prices, [100, 75, 421, "20"]);
var names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
prices.forEach(function (price, index) {
    writePrice(names[index], calculateTax(prices[index]));
});
