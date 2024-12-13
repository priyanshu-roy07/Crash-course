

// let prom=new Promise((resolve,reject)=>{
//          resolve("This is resolve");
//          reject("This is reject");
// })



// console.log(4);

// prom.then((ele)=>{
//   console.log(ele)
// }).catch((ele)=>{
//    console.log(ele)
// })

// console.log(6)


// //make a promise to check a number is positive.
// // print output after 2 second



//fetch
//CRUD

// let s=[]

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((ele)=>{ return ele.json()})
// .then((ele)=>{
//     //  s=ele
//     //  console.log(s,"inside")
//     let cart = []
//     let box = document.getElementById('table-list');

//     let tr1 = document.createElement('tr');
//             let td1 = document.createElement('th');
//             td1.innerText ="userId: ";
//             let td2 = document.createElement('th');
//             td2.innerText = "id: ";
//             let td3 = document.createElement('th');
//             td3.innerText="title: ";
//             let td4 = document.createElement('th')
//             td4.innerText="body: "
//             tr1.append(td1, td2, td3,td4);
//             box.append(tr1)
// })
// .catch((ele)=>{
//     console.log(ele)
// })

// console.log(s)


// Questions:

// 1. Filter Odd Numbers Write a function that filters out all the odd numbers from an array using the filter() method.

// const numbers = [1, 2, 3, 4, 5, 6];
// Expected Output: [1, 3, 5]
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);


// 2. Double Values Using map() Write a function that takes an array of numbers and doubles each value using the map() method.

// const numbers = [1, 2, 3, 4];
// Expected Output: [2, 4, 6, 8]
// const double = numbers.map(num => num * 2);
// console.log(double);


// 3. Find First Value Greater Than 10 Using find() Write a function that finds the first number greater than 10 in an array using the find() method.

// const numbers = [3, 7, 12, 19, 5];
// // Expected Output: 12
// const greater = numbers.find(num => num > 10);
// console.log(greater);