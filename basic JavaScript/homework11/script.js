let icons = document.querySelectorAll('.fas');
icons.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (event.target.classList.contains('invisible') === true) {
            event.target.classList.remove('invisible');
        }
    })
})

console.log(icons)
// event.target.classList.toggle('invisible');