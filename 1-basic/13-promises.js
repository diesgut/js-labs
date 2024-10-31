/*
Promises have three states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

A promise is created with Promise constructor passing a async function with two arguments:
resolve
reject
*/

//one promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve('success operation');
            console.log('watch me'); //watch me
        }
        reject('rejected operation');
    }, 1000);
});

promise.then((message) => {
    console.log(`resolved with "${message}"`);
}).catch((errorMessage) => {
    console.log(`rejected with "${errorMessage}"`);
}).finally(() => console.log("all ready"));
/*
watch me
resolved with "success operation"
*/

//chaining
const chainingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('First operation');
        }
    }, 1000);
});
chainingPromise.then((message)=> {
    console.log(message); 
    return 'Second operation';
}).then((message)=> console.log(message));

//multiple promises
const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/';
const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location/';
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode/';

async function multiplePromises() {
    const promises = [];
    for (i = 1; i <= 9; i++) {
        promises.push(fetch(URL_CHARACTERS + i));
    }

    for await (const promise of promises.slice(0, 3)) { //final index is not incluyed on slice
        const data = await promise.json();
        console.log(data.name);
    }
    //promise all
   const promisesAll = await Promise.all(promises.slice(3, 6));
   const promiseAllJsons = await Promise.all( promisesAll.map((promiseFetch)=> promiseFetch.json()));
   console.log(promiseAllJsons.map((json)=> json.name));

   //promise all settled
   promises.push(Promise.reject('throww error'));
   const promisesAllSettled = await Promise.allSettled(promises.slice(6, 10));
   
   const fulfilledOperations = await Promise.all( promisesAllSettled.filter((promiseFetch)=> promiseFetch.status === 'fulfilled').map((promiseJson)=> promiseJson.value.json()) );
   console.log(fulfilledOperations.map((json)=> json.name));

   const rejectedOperations = promisesAllSettled.filter((promise) => promise.status === 'rejected');
   console.log(rejectedOperations.map((rejected) => rejected.message));
}
multiplePromises();
