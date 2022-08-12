const buttons = document.querySelectorAll('.btn');

for (let btn of buttons) {
    if (btn.innerHTML === "Enter") {
        btn.classList.add('Enter');
    } else {
        btn.classList.add(`Key${btn.innerHTML}`);
    }
}

document.addEventListener("keydown", event => {
    let keyCode = event.code;
    
    if(document.querySelector(`.${keyCode}`)){
        for (const btn of buttons) {
            btn.style.backgroundColor = '';
        }
        document.querySelector(`.${keyCode}`).style.backgroundColor = 'blue';
    }
})