function printArr(arr:any[]){
    let str='['
    for(let i=0;i<arr.length;i++)
        str+=arr[i]+((i<arr.length-1)?',':' ');
    str+=']'
    console.log(str)
}

const array=[3,7,4]
const mappedArray=array.map((item)=>item+1)

printArr(array);
printArr(mappedArray)

let stringArr=array.map((item:number)=>(item+1).toString());
let printablestr = stringArr.reduce((wholeString:string, item:string)=>wholeString +', '+item);
console.log('['+printablestr+ ' ]');

let verbs:{positive: boolean, content: string}[]=[
    {
        positive:true,
        content: 'praise'
    },
    {
        positive:false,
        content: 'dropkick'
    },
    {
        positive:true,
        content: 'p'
    },
    {
        positive:true,
        content: 'help'
    },
    {
        positive:false,
        content: 'punch'
    }
];
let bePositive: {positive: boolean, content:string}[]=verbs.filter(s=>s.positive);
let positiveVerbs= bePositive.map((item:{positive:boolean, content:string})=>item.content);
let positiveStr= positiveVerbs.reduce((combined:string, item:string)=> combined+'/'+item);
console.log('I will '+ positiveStr +' you.')