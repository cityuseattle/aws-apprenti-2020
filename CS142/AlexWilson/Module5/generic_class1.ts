interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
{
    process(key:T, val:U):void {
        console.log('Key = ${key}, val = ${key}');
    }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'ABC');

/// Same issue here with line 9 not reading the values and only outputting literally:
//Key = ${key}, val = ${key}

