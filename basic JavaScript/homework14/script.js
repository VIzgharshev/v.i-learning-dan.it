const btnStop = document.querySelector('.stop');
const btnStart = document.querySelector('.start');
const imageCollection = document.querySelectorAll('.image-to-show');
let counterImg = 1;
let startStop = ''

const themeButton = document.querySelector('.theme');
const allButtons = document.querySelectorAll('.btn');
const cssBtn = 'background-color: #1D5B78; color: #FFC745; border: solid 1px #FFC745';

function showImg() {
    for (const img of imageCollection) {
        img.classList.add('hidden');
    }
    imageCollection[counterImg].classList.remove('hidden');
    counterImg++;
    if (counterImg >= imageCollection.length) {
        counterImg = 0;
    }
}

window.addEventListener('load', event => {
    startStop = setInterval(showImg, 3000);
    // console.log(localStorage.getItem('bg-color'))
    if (localStorage.getItem('bg-color') !== null) {
        document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.getItem('bg-color');
        for (const btn of allButtons) {
            btn.style.cssText = cssBtn;
        }
    }
})
btnStart.addEventListener('click', event => {
    startStop = setInterval(showImg, 3000);
})
btnStop.addEventListener('click', event => {
    clearInterval(startStop);
})

themeButton.addEventListener('click', event => {
    if (localStorage.getItem('bg-color') !== null) {
        document.getElementsByTagName('body')[0].removeAttribute('style');
        localStorage.removeItem('bg-color');
        for (const btn of allButtons) {
            btn.removeAttribute('style');
        }
    } else {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#0C1A33';
        localStorage.setItem('bg-color', '#0C1A33')
        for (const btn of allButtons) {
            btn.style.cssText = cssBtn;
        }
    }

})