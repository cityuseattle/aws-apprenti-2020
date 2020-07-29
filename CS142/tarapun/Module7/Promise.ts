//make a promise
var makePromise = (action: string)=> {
    return new Promise(function (resolve, reject){
        if (action ==='Study'){
            //If successful, resolve the promise
            resolve('Good, job!');
        }
        else{
            reject('Study Harder.');
        }
    });
};

//Reusable function to check the promise
const checkPromise =( theAction: string)=> makePromise(theAction).then(
    function(resolve) {
        console.log(resolve);
    }, function (reject){
        console.log(reject);
    }
);

//check the promise 1st time
var theAction ='Skip class';
checkPromise(theAction)
//check the promise 2nd time
theAction ='Study';
checkPromise(theAction);