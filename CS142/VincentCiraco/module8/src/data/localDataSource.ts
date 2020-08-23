import {AbstractDataSource} from "./abstractDataSource";
import {Product} from "./entities";
export class LocalDataSource extends AbstractDataSource{
    loadProducts(): Promise<Product[]>{
        return Promise.resolve([
            {id: 1, name: "P1", category: " Watersports",
                description: "P1 (Watersports)", price:3},
            {id: 1, name: "P2", category: " Watersports",
                description: "P2 (Watersports)", price:4},
            {id: 1, name: "P3", category: " Running",
                description: "P3 (Running)", price:5},
            {id: 1, name: "P4", category: " Chess",
                description: "P4 (Chess)", price:6},
            {id: 1, name: "P5", category: " Chess",
                description: "P5 (Chess)", price:7}
        ]);
    }
}