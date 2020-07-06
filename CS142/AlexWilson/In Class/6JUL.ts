import { Person, Product } from "./dataTypes";
let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)]
let cities = [new CountQueuingStrategy("London", 8136000), new CountQueuingStrategy("Paris", 2141000)];
class DataCollection<T extends { name: string }, U> {
    private items: T[] = [];
    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
    collate(targetData: U[], itemProp: string, targetProp: string: (T & U)[] {
        let results = [];
        this.items.
    })
}