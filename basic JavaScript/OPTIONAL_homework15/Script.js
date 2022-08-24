let userNum = prompt('Enter your number please!');
while (!userNum || Number.isNaN(+userNum)) {
    userNum = +prompt('Enter your number please!');
}

function createFactorial(userNum) {
    if (userNum === 1) {
        return 1;
    } else {
        return userNum * createFactorial(userNum - 1)
    }
}


alert(createFactorial(userNum));