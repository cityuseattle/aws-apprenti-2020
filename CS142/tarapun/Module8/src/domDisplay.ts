import {Product } from "./data/entities";
export class DomDisplay {
    props: {
        products: Product[],
    }
    getContent():HTMLElement {
        let elem =document.createElement("h3");
        elem.innerText = this.getElementText();
        elem.classList.add("bg-primary", "text-center", "text-white", "p-2");
        return elem;
    }
    getElementText(){
        return '${this.props.products.length} Products';
    }
}