// console.log(a)
// var a=6;
// var abc="matriculation";
// console.log(a+"after")
// var ar=[1,2,3,5,6,8,9,3,2,1];
// let obj={};
// for(var i=0;i<ar.length;i++){
//     if(obj[ar[i]]==undefined){
//         obj[ar[i]]=1;
//     }
//     else{
//        obj[ar[i]]=obj[ar[i]]+1
//     }
// }

// console.log(obj);
// console.log(a)

// console.log(1-"1")
// const c=89;
// console.log(b)
// console.log(a)
// console.log(c)


// object can be accessed using dot . or bracket []. Eg- obj.a ,obj["a"]
// typeof - is used to find the typeof variable
// typeof array is - object



// let arr=[1,2,3,4,5,6,7,8];
// // arr.splice(1,1)
// // a = arr.slice(2,5)
// // arr.push("Priyanshu")
// // a = arr.pop()
// // a = arr.unshift("Priyanshu")
// // a = arr.shift(0)
// // console.log(arr)
// console.log(a,arr)


let cart = [
    { name: "Lux", price: 50, comments: "", detail: "",  id: 4 },
    { name: "Hajmola", price: 20, comments: "", detail: "", id: 2 },
    { name: "Shampoo", price: 250, comments: "", detail: "", id: 5 },
    { name: "Detol", price: 150, comments: "", detail: "", id: 6 },
    { name: "Petrol", price: 150, comments: "", detail: "", id: 6 }
]
let arr = cart.filter(function(a){
    if(a.price==150)
        return false;
    else
    return true;
});
// console.log(arr)
cart = [...arr]
console.log(cart)