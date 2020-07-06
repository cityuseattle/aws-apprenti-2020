function compare(b:number){
    return (a:number) => a === b;
}

function printEqual(functionName:string, equalTo: Function){
    let result:boolean;
    for(let i = 1; i <= 3; ++i){
        result = equalTo(i);
        console.log(i + functionName + 
            ':The two numbers are ' + (result?'':'not ') +'equal.');
    }
}

const compareTo1 = compare(1);
const compareto3 = compare(3);
printEqual(' compare to 3', compareto3);
printEqual(' compare to 1', compareTo1);