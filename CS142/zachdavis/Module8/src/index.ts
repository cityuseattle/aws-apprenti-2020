import { LocalDataSource } from "./data/localDataSource";
async function displayData(): Promise<string> {
    let ds = new LocalDataSource();
    ds.loadProducts();
    let allProducts = await ds.getProducts("name");
    console.log(allProducts);
    let result = "";
    allProducts.forEach(p => result += `Product: ${p.name}\n`);
    result += `allProducts: ${allProducts.length}`;
    return result;
}
displayData().then(res => console.log(res));
