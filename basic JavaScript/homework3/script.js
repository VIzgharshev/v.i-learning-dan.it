'use strict'
let num = null;
    num = +prompt("Choose your number");
while (!num || isNaN(num) || !Number.isInteger(num)){
   alert("Choose integer number!");
   num = +prompt("Choose your number", "integer plese");
}
let num2 = null;
    num2 = +prompt("Choose your number2");
//for (let i = 0; i <= num; i++) {
//   if (i % 5 == 0 && i !== 0) {
//      console.log(i);
//   }
//   if (num <= 4) {
//      alert("Sorry, no numbers");
//      break;
//   }
//}


for (let i = num; i >= num2; i--) {
   if (i % 5 == 0 && i !== 0) {
      console.log(i);
   }
   if (num <= 4) {
      alert("Sorry, no numbers");
      break;
   }
}