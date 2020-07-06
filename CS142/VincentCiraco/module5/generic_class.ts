class keyValuePair<T,U>
{
    private key: T;
    private val: U;

    setKeyValue(key: T,val: U): void {
        this.key = key;
        this.val = val;
    }
    display():void {
        console.log('Key = '+ this.key + ', val = '+ this.val);
    }
}

let kvp1 = new keyValuePair<number, string>();
kvp1.setKeyValue(1, "ABC");
kvp1.display();

let kvp2 = new keyValuePair<string, string>();
kvp2.setKeyValue("HELLO", "World");
kvp2.display();