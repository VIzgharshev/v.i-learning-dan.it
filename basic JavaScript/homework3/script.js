'use strict'
let num = null;
    num = prompt("Choose your number");
while (!num || Number.isNaN(+num) || !Number.isInteger(+num)){
   alert("Choose integer number!");
   num = prompt("Choose your number", num);
}
num = +num

for (let i = 0; i <= num; i++) {
   if (i % 5 == 0) {
      console.log(i);
   }
   if (num <= 4) {
      let messege = "Sorry, no numbers";
      console.log(messege);
      break;
   };
}