// Creating Promises 
var makePromise = (action) => {
    return new Promise(function (resolve, reject) {
        if (action === 'Study') {
            // if successful, resolve the promise 
            resolve('GoodJOb ! ');
        }
        else {
            reject('Study Harder.');
        }
    });
};
//Reusable function to check the promise made 
const checkPromise = (theAction) => makePromise(theAction).then(function (resolve) {
    console.log(resolve);
}, function (reject) {
    console.log(reject);
});
// check the promise 1st time 
var theAction = 'Skip class';
checkPromise(theAction);
// second check 
theAction = 'Study';
checkPromise(theAction);
