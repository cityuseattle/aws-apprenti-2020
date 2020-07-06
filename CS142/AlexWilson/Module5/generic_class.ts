class KeyValuePair<T, U>
{
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void {
        this.key = key;
        this.val = val;
    }

    display():void {
        console.log('Key = ${this.key}, val = ${this.val}');
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "ABC");
kvp1.display();

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("Hellow", "World");
kvp2.display();

// I'm not sure why, but when I run this as javascript, it reads the variables literally like so:
//lexon@3c22fb582218 Module5 % node generic_class.js
// Key = ${this.key}, val = ${this.val}
// Key = ${this.key}, val = ${this.val}