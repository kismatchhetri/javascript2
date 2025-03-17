console.log("loop in javascript");

console.log( "for loop");

let sum = 0;
let n = 4;
for(let i=0; i<n ;i++)
{
    sum += (i+1);
    console.log((i+1) , "+");

}
console.log( "sum of first natural numbers",n,"numbers" , sum,);

eg


for in loop


let game={
    fight:"200",
    price:500,
    buy:"now"

}
for(let a in game){
    // console.log("marks of ",a ,"are" ,game[a]);
    // console.log(a);
    console.log(game[a]);
}


//for of loop

// for(let b of "kismat"){
//     console.log(b);
// }

