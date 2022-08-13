const btnStop = document.querySelector('.stop');
const btnStart = document.querySelector('.start');
const imageCollection = document.querySelectorAll('.image-to-show');
let counterImg = 1;
let startStop = ''

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
btnStart.addEventListener('click', event => {
    startStop = setInterval(showImg, 3000);
})
btnStop.addEventListener('click', event => {
    clearInterval(startStop);
})  