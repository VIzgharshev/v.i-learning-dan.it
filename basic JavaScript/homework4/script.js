'use strict'

let num1 = prompt('Enter number1!');
while (!num1 || Number.isNaN(+num1)){
   alert('Choose number!');
   num1 = prompt("Enter number!", num1);
}
num1 = +num1;

let num2 = prompt('Enter number2!');
while (!num2 || Number.isNaN(+num2)){
   alert('Choose number!');
   num2 = prompt("Enter number!", num2);
}
num2 = +num2;

let operation = prompt('choose operation: +, -, /, *.');
while (!operation || operation !== "+" || operation !== "-" || operation !== "*" || operation !== "/"){
   alert("Choose only operator");
   operation = prompt('choose operation: +, -, /, *.', operation);
}

if (operation == '+') {
   let summ = (a, b) => a + b;
   console.log(summ(num1,num2));
} else if (operation == '-') {
   let minus = (a, b) => a - b;
   console.log(minus(num1,num2));
 } else if (operation == '*') {
   let multy = (a, b) => a * b;
   console.log(multy(num1,num2));
 } else if (operation == '/') {
   let divide = (a, b) => a / b;
   console.log(divide(num1,num2));
 }