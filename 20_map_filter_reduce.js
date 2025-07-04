// //array map mehtod

// let a = [44,46,99]
// let aa=a.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value + 1;
// })

// console.log(aa)

// //filter

// let arr2 = [44,46,99,4,0]
// let a2=arr2.filter((a)=>{
// return a<10;
// });
// console.log(a2)

// console.log(arr2); //doesnot change orignal array



//reduce

let arr3 = [1,2,3,4,5];
let newarr3 =arr3.reduce((h1,h2)=>{
    return h1+h2;

})

console.log(newarr3);


let arr4 = [1,2,3,4,5];
const reduce_func=(h1,h2)=>{
    return h1+h2;

}

let newarr4=arr4.reduce(reduce_func);
console.log(newarr4)