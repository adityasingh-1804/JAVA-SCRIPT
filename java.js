// fullname = "Aditya singh";
// console.log(fullname);

// age="12";
// console.log(age)
// //Operators 
// let a = 5;
// let b = 6;
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// let number = prompt("Enter the number");
// console.log(number)
// if(number%5==0){
//     console.log("number is divisible by 5");

// }
// else{
//     console.log("numbver is not divisible by 5");
// }

// for(let i = 0;  i <5; i++){
//     console.log("hi");
// }
//for off loop
// let str = "Aditya singh"
// let size =0;
// for(let i of str){
//     console.log("i=",i)
//     size++;
// }
// console.log(size)


// for.       in.        loop.    
// print the keys only.

// let student ={
//     name: "aditya singh",
//     age: 18,
//     cgpa :9.22,
// }
// for(let i in student){
//     console.log("key=",i);
// }


// Print all the number from 0 to 100
// for(let i = 0; i <= 100; i=i+2){
//     console.log(i);
// }


//game 
// let gameNum=25;
// let corrNum=prompt("enter the guess number");
// while(gameNum!=corrNum){
//     corrNum = prompt("you entered wrong number enter again");

// }
// console.log("you entered correct number");



//string
// let str = "apna college";
// console.log(str[0]);


//template literals
// let specialstring="this is template literals";
// console.log(specialstring);

//Example of template literal
// let obj = {
//     item:"pen",
//     price: 10,

// };
// let output = ' the cost of ${ obj  item }is ${obj price} rupees'



//string methods in java script
// 1. slicing 
// let str = "012345";
// console.log(str.slice(1,4));


//2.concat
// let str1 = "hello";
// let str2 = "world";
// console.log(str1.concat(str2));


//replace str
// let str = "i love india";
// str = str.replace("i","t");
// console.log(str);



//practice question
let name=prompt("Enter the user name");
let username= "@" + name + (name.length);
console.log(username);
