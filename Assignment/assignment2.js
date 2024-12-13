// Q1. Code Completion
// Complete the following code to combine arr1 and arr2 using the spread operator:
// javascript
// Copy code
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // Combine arr1 and arr2
// const combined = [...arr1 ] + [...arr2]
// console.log(combined); 


// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }
  
//   console.log(sum(1, 2, 3, 4)); // ?
//   console.log(sum(5));          // ?
//   console.log(sum());           // ?
  
// Write a function called filterByType using the rest operator that filters arguments based on their type.
// Example:
// javascript
//  let Type = ['string', 1, 'hello', true, 42, 'world'];
// const output = Type.filter(item => typeof item === 'string' && (item.includes("h" ) || item.includes("w")));
// console.log(output)

// Consider the following code. What is the output, and why?
// javascript
// const original = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...original };
// shallowCopy.b.c = 10;
// console.log(original.b.c);
// console.log(shallowCopy.b.c); 



