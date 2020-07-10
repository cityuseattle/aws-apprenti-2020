import { LocalDataSource } from "./data/localDataSource";
import { DomDisplay } from "./domDisplay";

let ds = new LocalDataSource();
async function displayData(): Promise<HTMLElement> {
    let display = new DomDisplay();
    display.props = {
        products: await ds.getProducts("name"),
    }
    return display.getContent();
}
document.onreadstatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementaryById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        });
    }
};