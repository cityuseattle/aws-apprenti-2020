//Optional Parameters
function doSomething(action: string, objStr?: string)
{
    console.log(action, (objStr || 'nothing') + '.');

}

doSomething('Read');
doSomething('Read', 'a book');

//default parameters
function printSomething (noun: string, times: number =5)
{
    for(let i =0; i <times; i++)
    {
        console.log(noun);
    }
}

printSomething('Car');
printSomething('Carpet', 3);