interface IkeyValueProcessor<T, U> {
    process(key: T, val: U): void;
}

class kvProcessor<T, U> implements IkeyValueProcessor<T, U> {
    process(key:T, val:U):void {
        console.log('Key = ${key}, val = ${val}');
    }
}

let proc: IkeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'ABC');