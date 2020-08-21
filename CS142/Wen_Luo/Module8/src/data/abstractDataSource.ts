import { Product } from "./entities";
export type ProductProp = keyof Product;
export abstract class AbstractDataSource {
    private _product: Product[];
    public loading: Promise<void>;
    constructor(){
        this._product = [];
        this.loading = this.getData();
    }
    async getProducts(sortProp: ProductProp = "id",
            category? : string): Promise<Product[]> {
        await this.loading;
        return this._product;
    }

    protected async getData(): Promise<void> {
        this._product = [];
        const rawData = await this.loadProducts();
        rawData.forEach( p => {
            this._product.push(p);
        });
        }
    protected abstract loadProducts(): Promise<Product[]>;
}