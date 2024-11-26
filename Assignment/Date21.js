// // Part 3: Promises
// // Q1)Create a Promise that resolves after 3 seconds and prints "Promise Resolved!" to the console. Add rejection logic to handle any errors.
var n = 5
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n==5) {
        resolve("Promise Resolved!");
      } else {
        reject("Promise Rejected!");
      }
    }, 3000);
  });
myPromise.then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });
  
