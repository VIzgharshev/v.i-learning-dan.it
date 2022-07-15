function createNewUser() {
   const firstName = prompt('Enter your first name!');
   const lastName = prompt('Enter your last name!');

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