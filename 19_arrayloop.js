let num = [3,42,1,7];
// for (let i=0;i<num.length;i++)
// {
// console.log(num[i]);
// }

//forEach loop
num.forEach((element) => {
    console.log(element*element)
})


//array.from   //for making array form html element
let name = "kismat"
let arr=Array.from(name);
console.log(arr);

//for.....of
for(let i of num){
    console.log(i)
}
for(let i in num){
    console.log(num[i])
}




