//Make a promise
var makePromise = (action) => {
    return new Promise(function (resolve, reject) {
        if (action === 'Study') {
            //If successful, resolve the promise
            resolve('Good Job!');
        }
        else {
            reject('Stuy harder.');
        }
    });
};
//reuseable function to check the promise
const checkPromise = (theAction) => makePromise(theAction).then(function (resolve) {
    console.log(resolve);
}, function (reject) {
    console.log(reject);
});
//Check the promise 1st time
var theAction = 'Skip Class';
checkPromise(theAction);
//Check the promise 2nd time
theAction = 'Study';
checkPromise(theAction);
