// Make a promise to check a number is positive or not 
// Print output after 2 seconds
let n = -5
console.log("Analyzing the number...")
let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(n>=0){
            resolve("The number is positive");
        }
        else{
            reject("The number is negative");
        }
    },2000)
})

prom.then((num)=>{
    console.log(num);
}).catch((num)=>{
    console.log(num);
})