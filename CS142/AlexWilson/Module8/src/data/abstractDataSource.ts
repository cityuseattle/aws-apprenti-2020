import { Product } from "./entities";
export type ProductProp = keyof Product;
export abstract class AbstractDataSource {
    private _products: Product[];
    public loading: Promise<void>;
    constructor() {
        this._products = [];
        this.loading = this.getData();
    }
    async getProducts(sortProp: ProductProp = "id",
            category? : string): Promise<Product[]> {
        await this.loading;
        return this._products;    
    }
    protected async getData(): Promise<void> {
        this._products = [];
        const rawData = await this.loadProducts();
        rawData.forEach(p => {
            this._products.push(p);
        });
        }
        protected abstract loadProducts(): Promise<Product[]>;
}