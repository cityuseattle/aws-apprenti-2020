import { LocalDataSource} from "./data/localDataSource";
import { DomDisplay } from ".DomDisplay";

let ds = new LocalDataSource();
async function displayData(): Promise<HTMLElment> {
    let display = new DomDisplay();
    display.props = {
        products: await ds.getProducts("name"),
    }
    return display.getContent();
}
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementById("app")
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        });
    }
}