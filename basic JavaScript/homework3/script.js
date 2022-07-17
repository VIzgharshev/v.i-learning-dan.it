'use strict'
let num;
    num = prompt("Choose your number");
while (!num || Number.isNaN(+num) || !Number.isInteger(+num)){
   alert("Choose integer number!");
   num = prompt("Choose your number", num);
}

num = +num

if (num <= 4) {
   let message = "Sorry, no numbers";
   console.log(message);
}
for (let i = 0; i <= num; i++) {
   if (i % 5 === 0) {
      console.log(i);
   }
}