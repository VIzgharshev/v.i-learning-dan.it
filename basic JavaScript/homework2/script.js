let userName;
userName = prompt("Enter your name!");
while (!userName) {
   alert("Неправильное имя!");
   userName = prompt("Enter your name!", userName);
    }
let userAge = null;
    userAge = +prompt("Enter your age!");
while (!userAge || isNaN(userAge)) {
   alert("Неправильное возраст!");
   userAge = +prompt("Enter your age one more time!", userAge);
}


if (userAge < 18) {
   alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
   let checkAge = confirm("Are you sure you want to continue?");
   if (checkAge) {
      alert("Welcome, " + userName);
   }
   else  {
      alert("You are not allowed to visit this website");
      }
} else { 
   alert("Welcome, " + userName);
}


