function createNewUser() {
   const firstName = prompt('Enter your first name!');       // получаем имя
   const lastName = prompt('Enter your last name!');         // получаем фамилию

   const newUser = {
      firstName,
      lastName,
      getLogin() {
         let finalAbr = firstName[0] + lastName;
         return finalAbr.toLowerCase();
      }
   }
   return newUser.getLogin();
}

console.log(createNewUser());