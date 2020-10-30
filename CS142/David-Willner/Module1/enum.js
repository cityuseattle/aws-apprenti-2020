function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log('Price for' + product + ':' + price.toFixed(2));
}
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 21] = "Umbrella";
})(Product || (Product = {}));
var productValue = 21;
var productName = Product[productValue];
console.log("Value: " + productValue + ", Name: " + productName);
