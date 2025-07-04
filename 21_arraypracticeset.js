// Q1.
let arr = [1,2,3,4,5,6]

let a = prompt("enter number")
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Q2.
let arr = [1,2,3,4,5,6]
let a;
do{
a = prompt("enter number")
a = Number.parseInt(a);
arr.push(a);

}while(a!=0);
console.log(arr)


// Q3.
let filters=[2,3,10,20,50,6];
let filters1=filters.filter((x)=>{
    return x%10 == 0;
})
console.log(filters1)


// Q4.

let filters=[2,3,10,20,50,6];
let filters1=filters.map((x)=>{
    return x*x;
})
console.log(filters1);


//Q5.

let filters=[1,2,3,4,5,6,7,8];
let filters1=filters.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(filters1);
