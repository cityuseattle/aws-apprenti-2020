//  Generic Class implements genetic imterface 

interface IKeyValueProcessor<T,U>
{
    process(key: T, val:U ):void;
};

class kvprocessor<T,U> implements IKeyValueProcessor<T,U>
{
    process(key: T, val:U ):void {
        console.log("Key = " + key + ', val = ' + val);
    }
}

let proc: IKeyValueProcessor<number,string> = new kvprocessor();
proc.process(1, 'ABC');