// let array = [1, 2, 3, 4, 5, 6, 7];
// for (x in array){
//     console.log(x);
//     console.log(array[x])
//     if(Number(x) + 1 == array[x]){
//         array[x] = Math.floor(Math.random() * 5 + 3);
//     }
// }
// console.log(array)


function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let arr = [];

for(let i = 0; i < 5; i++){
    let r = rand(5, 15);
    arr.push(r);
    console.log(`${r} was pushed into arr`);
}
console.table(arr);