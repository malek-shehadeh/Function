// Q1

// var str = prompt("please enter");

// function reverse() {
//   str = str.split("").reverse().join("");

//   return str;
// }

// console.log(reverse());

// //////////////////////
// Q2

// function iteretion() {
//   for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }
// }
// iteretion();
// /////////////////////////
// // Q3

// function malek(str) {
//   str = str.split("").sort().join("");
//   return str;
// }
// console.log(malek("orange"));

// //////////////////////////
// // Q4

let num = window.prompt();
let str = num.toString();
let result = [str[0]];

for (x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-" + str[x]);
  } else {
    result.push(str[x]);
  }
}
// console.log(result.join(""));
document.getElementById("malek").innerHTML = result.join("");
// //////////////////////////
// Q5;
// function agechecker(age) {
//   if (age >= 18) {
//     console.log("the user is adult");
//   } else {
//     console.log("the user is minor");
//   }
// }
// agechecker(15);
