let userName = prompt('Input your name!');
let userLastName = prompt('Input your last name!');
let student = {
    name: userName,
    lastName: userLastName,
}
let checker = '';
while (checker != null) {
    let subject = prompt('Input subject!');
    checker = subject;
    if (subject === null) {
        break
    } else {
        let mark = null;
        mark = +prompt('Input your mark!');
        while (!mark || isNaN(mark)) {
            let mark = +prompt('Input your mark!');
        }
        student[`${subject}`] = Number(`${mark}`);
    }
}
let allMarks = Object.values(student);

let countMarks = 0;
let summAllMarks = 0;
let badMarks = 0;

for (let i = 0; i < allMarks.length; i++) {
    console.log(typeof allMarks[i])
    if (typeof allMarks[i] === 'number') {
        countMarks++;
        summAllMarks += allMarks[i];
        if (allMarks[i] < 4) {
            badMarks++
        }
    }
}
if (badMarks === 0) {
    alert('Студент переведено на наступний курс!');
}

let middleMark = summAllMarks / countMarks;

if (7 < middleMark) {
    alert('Студенту призначено стипендію!');
}