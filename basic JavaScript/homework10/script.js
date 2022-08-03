const titlesList = document.querySelector('.tabs');


titlesList.addEventListener("click", (event) => {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');

    const targetAttr = event.target.dataset.title;
    document.querySelector('.visible').classList.remove('visible');
    document.querySelector(`.tabs-content-item[data-title='${targetAttr}']`).classList.add('visible');
})