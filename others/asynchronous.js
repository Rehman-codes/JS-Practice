// ---------------------------------- Callbacks ----------------------------------
/* A callback is a function passed as an argument to another function and is executed after some operation has been completed. */

function fetchDataCallback(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

fetchDataCallback((data) => {
    console.log(data);  // Outputs: Data fetched
});

// ---------------------------------- Promises ----------------------------------
/* A promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. */

// Creating a promise
const operationPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate an operation

    if (success) {
        resolve("Operation succeeded!"); // Fulfilled
    } else {
        reject("Operation failed!"); // Rejected
    }
});

// Handling the promise
operationPromise
    .then(result => {
        console.log(result); // Operation succeeded!
    })
    .catch(error => {
        console.error(error); // Operation failed!
    })
    .finally(() => {
        console.log("Promise handling completed."); // This always runs
    });

// ---------------------------------- async/await ----------------------------------
/* async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code. */

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function getDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log(data);  // Outputs: Data fetched
    } catch (error) {
        console.error(error);
    }
}

getDataAsync();

/* ************************************************************************************************************************** */
// Promises can be combined using Promise.all, Promise.race, Promise.allSettled, and Promise.any for more complex asynchronous workflows.

// Promise.all
const promiseA = Promise.resolve(3);
const promiseB = 42;
const promiseC = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promiseA, promiseB, promiseC]).then(values => {
    console.log(values); // [3, 42, 'foo']
}).catch(error => {
    console.error(error);
});

// Promise.race
const racePromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const racePromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([racePromise1, racePromise2]).then(value => {
    console.log(value); // 'two'
}).catch(error => {
    console.error(error);
});

// Promise.allSettled
const allSettledPromise1 = Promise.resolve(3);
const allSettledPromise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'error');
});

Promise.allSettled([allSettledPromise1, allSettledPromise2]).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        } else {
            console.error('Rejected:', result.reason);
        }
    });
});

// Promise.any
const anyPromise1 = Promise.reject('Error 1');
const anyPromise2 = Promise.reject('Error 2');
const anyPromise3 = Promise.resolve('Success');

Promise.any([anyPromise1, anyPromise2, anyPromise3]).then(value => {
    console.log(value); // 'Success'
}).catch(error => {
    console.error(error); // If all promises are rejected
});
