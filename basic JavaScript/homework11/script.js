let iconsOpen = document.querySelectorAll('.fa-eye');
iconsOpen.forEach(elem => {
    elem.addEventListener('click', event => {
        event.target.classList.add('invisible');
        event.target.nextElementSibling.classList.remove('invisible');
        event.target.previousElementSibling.setAttribute('type', 'text');
    })
})

let iconClose = document.querySelectorAll('.fa-eye-slash');
let inputs = document.querySelectorAll('.input');

iconClose.forEach(elem => {
    elem.addEventListener('click', event => {
        event.target.classList.add('invisible');
        event.target.previousElementSibling.classList.remove('invisible');
        for (const input of inputs) {
            if (event.target.dataset.second) {
                document.querySelector('.input[data-second="second"]').setAttribute('type', 'password');
            }
            if (event.target.dataset.first) {
                document.querySelector('.input[data-second="first"]').setAttribute('type', 'password');
            }
        }
    })
})

