function createNewUser() {
   const firstName = prompt('Enter your first name!');
   const lastName = prompt('Enter your last name!');

   const newUser = {
      firstName,
      lastName,
      getLogin() {
         const finalAbr = this.firstName[0] + this.lastName;
         return finalAbr.toLowerCase();
      }
   }
      return newUser;
}

const creatUser = createNewUser();

console.log(creatUser.getLogin());