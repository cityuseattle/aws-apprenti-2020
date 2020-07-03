// console.log("Web App");
import { LocalDataSource } from "./data/localDataSource";
// async function displayData(): Promise<string> {
//     let ds = new LocalDataSource();
//     ds.loadProducts();
//     let allProducts = await ds.getProducts("name");
//     console.log(allProducts);
//     let result = "";
//     allProducts.forEach(p => result += `Product: ${p.name}\n`);
//     result += `allProducts: ${allProducts.length}`;
//     return result;
// }
// displayData().then(res => console.log(res));
import { DomDisplay } from "./domDisplay";

let ds = new LocalDataSource();
async function displayData(): Promise<HTMLElement> {
    let display = new DomDisplay();
    display.props = {
        products: await ds.getProducts("name"),
    }
    return display.getContent();
}
document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        });
    }
};