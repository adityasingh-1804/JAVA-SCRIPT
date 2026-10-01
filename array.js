// let arr = [2,4,6,8,9];
// console.log(arr);
// console.log(arr.length);
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
//for of loop
// for(let array of arr){
//     console.log(array);
// }
//---Average marks--

let arr = [85,97,44,37,76,60];
let n = arr.length;
let sum = 0;
let avg = 0;
for(let i = 0; i < n; i++){
    sum = sum + arr[i];

}
avg = sum / n;
console.log(avg);
