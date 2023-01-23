//* Callback: A callback is a function that is passed as an argument to another function and is executed after the first function has finished running.

function addTwoNumbers(a,b, callback){
    let result =a+b;
    callback(result);
}

function printResult(result){
    console.log(result);
}

console.log(addTwoNumbers(1,2, printResult));


//* Callback Hell: Callback hell is a situation where multiple nested callbacks are used, making the code difficult to read and understand.

// function getData(callback){
//     fetch('')
//     .then(response => response.json())
//     .then(data => callback(data))
//     .catch(error => console.log(error))
// }

// function processData(data, callback){
//     callback(processData);
// }

// function displayData(data){
//     console.log(data);
// }

// getData(function(data){
//     processData(data, function(processedData){
//         displayData(processedData);
//     });
// });


//* Fetch: Fetch is a JavaScript function that is used to make network requests, such as to retrieve data from a server. It returns a promise that resolves to the response.

fetch('https://official-joke-api.appspot.com/random_joke')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));


//* Promises: A promise is an object that represents the eventual completion or failure of an asynchronous operation. A promise can be in one of three states: fulfilled, rejected, or pending.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 1000);
  });
  
  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
  