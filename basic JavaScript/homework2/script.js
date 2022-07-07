let userName = prompt("Enter your name!");
let userAge = +prompt("Enter your age!");

if (userAge < 18) {
   alert("You are not allowed to visit this website")
} else if (18 < userAge <= 22) {
   confirm("Are you sure you want to continue?")
} 
