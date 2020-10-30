import{AbstractDataSource} from "./abstractDataSource"
import{Product} from "./entities"
export class localDataSource extends AbstractDataSource{
    loadProducts(): Promise<Product[]>{
        return Promise.resolve([
            {id:1, name:"p1", category: "watersports", description:"P1 (watersports) ", price:3},
            {id:2, name:"p2", category: "watersports", description:"P2 (watersports) ", price:4},
            {id:3, name:"p3", category: "Running", description:"P3 (Running) ", price:5},
            {id:4, name:"p4", category: "Chess", description:"P4 (Chess) ", price:6},
            {id:5, name:"p5", category: "Chess", description:"P5 (Chess) ", price:7},
        ])
    }
}