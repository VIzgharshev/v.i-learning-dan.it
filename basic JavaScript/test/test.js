//function argsFromOutside() {
//   let summ = 0
//   for (let i = 0; i < arguments.length; i++) {
//      summ += arguments[i];
//    }
//    return summ;
//}
 
//console.log(argsFromOutside())


// loop variation
//let arr = [1, 2, 3, 4, 5, 5,];
//let result = "";
//for (let i = 0; i <= 5; i++) {
//   result += arr[i] + " ";
//}

//console.log (arr[i])
console.log ("hi")
   let num1 = +prompt("Input your num1");
   let operation = prompt("choose operation");
   let num2 = +prompt("Input your num2");
   let calc2 = "";

function calc() {
   if (operation = "+") {
      calc2 = num1 + num2;
   } else if (operation = "*") {
      calc2 = num1 * num2;
   } else if (operation = "-") {
      calc2 = num1 - num2;
   } else if (operation = "/") {
      calc2 = num1 / num2;
   } else {
      alert("Error operation");
   }
   alert(calc2);
}

calc()