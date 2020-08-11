// Make a promise
var makePromise = (action: string) => {
    return new Promise(function (reslove, reject) {
        if(action === 'Study') {
            //If successful, resolve the promise
            reslove('Good Job!');
        } else {
            reject('Study harder.')
        }
    });
};

// Reusable function to check the promise
const checkPromise = (theAction: string) => makePromise(theAction).then(
    function (resolve) {
        console.log(resolve);
    }, function (reject) {
        console.log(reject);
    }
);

// Check the promise 1st time
var theAction = 'Skip class';
checkPromise(theAction)

//Check the promise 2nd time
theAction = 'Study';
checkPromise(theAction)