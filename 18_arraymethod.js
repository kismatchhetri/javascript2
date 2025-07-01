let abhimat=[2,4,5,6,4]
let neon=[43,433,533,633,433]
console.log(abhimat);
delete abhimat[3];  ///length remains same
console.log(abhimat);
console.log(abhimat,neon);

let newconcat=abhimat.concat(neon);
console.log(newconcat);
console.log(abhimat,neon);

let prem = [9,99,999,999];
let radha=["kismat","neon"]
let newconcats=newconcat.concat(prem,radha);
console.log(newconcats);



 let alphabet=(a,b)=>{
    return a-b;  //b-a for decending order
 }

 
// function alphabet(a,b){
//     return a-b;
// }                              //function call another method

let ganesh=[333,329,2,4,9,5,6,33];
ganesh.sort();
console.log(ganesh) //gives sorting based on number eg 2 3 33 321 4
ganesh.sort(alphabet);
console.log(ganesh);

ganesh.reverse();
console.log(ganesh)



//splice(removes) and slice(shows)

// splice(start,end,numtoadd)
//slice slices out a piece from an array it cretes a new array
let gaman=[333,329,2,4,9,5,6,33];
gaman.splice(1,3,404,1001);
console.log(gaman);


let tila=[333,329,2,4,9,5,6,33];
// tila.slice(3);
// console.log(tila)  //as it donot modify orignal array so result will not be affected

let newtila =tila.slice(3);
console.log(newtila);

let newtila1 = tila.slice(2,5);
console.log(newtila1);
console.log(tila);