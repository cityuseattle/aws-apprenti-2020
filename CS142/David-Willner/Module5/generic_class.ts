class KeyValuePair<T,U>
{
    private key:T
    private val:U

    setKeyValue(key:T, val:U): void{
        this.key = key;
        this.val = val;
    }

    display(): void{
        console.log(`key = ${this.key}, val = ${this.val}`)
    }
}

let kvp1 = new KeyValuePair<number, string>()
kvp1.setKeyValue(1,"ABC");
kvp1.display();

let kvp2 = new KeyValuePair<string, string>()
kvp2.setKeyValue("Hello", "World");
kvp2.display()