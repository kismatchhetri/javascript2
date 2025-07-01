let num = [1,2,3,4,5,6,7,8,9];

let newarray=[11,12,13,14]
let newarrayw=[111,112,113,114]
// console.log(num);

// delete num[0];
// console.log(num)
// console.log(num.length)

let newarrays=num.concat(newarray,newarrayw);
console.log(newarrays);

let sortt=["kismat","bhimat","abhi"];
sortt.sort()
console.log(sortt);

let compare=(a,b) => {
    return a-b; //b -a for descending order
}
let numm=[1,2,5,6,3,5,7,222];
numm.sort(compare);
numm.reverse()
console.log(numm);


//splice and slice
let nummm=[1,2,5,6,3,5,7,222];

nummm.splice(2,3,231,232,233);
console.log(nummm);

let nummmm=[1,2,5,6,3,5,7,222];

nummmm.slice(2,3,231,232,233);
console.log(nummmm);
