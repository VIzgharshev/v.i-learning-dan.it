function createNewUser() {
    let firstName = prompt('Enter your first name!');
    let lastName = prompt('Enter your last name!');

    let inputDate = prompt('Enter your birthday in format dd.mm.yyyy!');
    let birthday = inputDate.split('.');

    let birthDay = +birthday[0];
    let birthMonth = +birthday[1];
    let birthYear = +birthday[2];

    let localDay = new Date().getDate();
    let localMonth = new Date().getMonth();
    let localYear = new Date().getFullYear();

    return {
        firstName,
        lastName,
        birthday,
        getAge() {
            let userAge;
            if (localMonth < birthMonth || localMonth === birthMonth && localDay < birthDay) {
                userAge = localYear - birthYear - 1;
            } else {
                userAge = localYear - birthYear;
            }
            return 'User age is ' + userAge + ' years!';
        },
        getPassword() {
            const finalAbr = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + birthYear;
            return 'Your password is: ' + finalAbr;
        },
    };
}

let newtUser = createNewUser();


console.log(newtUser);
console.log(newtUser.getAge());
console.log(newtUser.getPassword());