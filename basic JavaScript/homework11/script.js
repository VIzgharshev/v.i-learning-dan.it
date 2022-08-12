const form = document.querySelector('.password-form');

form.addEventListener('click', event => {
    event.target.classList.toggle('fa-eye');
    event.target.classList.toggle('fa-eye-slash');
    if (event.target.classList.contains('fa-eye')) {
        event.target.previousElementSibling.setAttribute('type', 'password');
    } else {
        event.target.previousElementSibling.setAttribute('type', 'text');
    }
})

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
    const inputFirst = document.querySelector('.input-first').value;
    const inputSecond = document.querySelector('.input-second').value;
    const warning = document.querySelector('.warning-message');
    if (inputFirst === inputSecond) {
        warning.classList.add('hidden');
        alert('You are welcome');
    } else (
        warning.classList.remove('hidden')
    )
})

// icons.forEach(elem => {
//     elem.addEventListener('click', event => {
//         event.target.classList.toggle('fa-eye');
//         event.target.classList.toggle('fa-eye-slash');
//         if (event.target.classList.contains('fa-eye')) {
//             event.target.previousElementSibling.setAttribute('type', 'password');
//         } else {
//             event.target.previousElementSibling.setAttribute('type', 'text');
//         }
//     })
// })

// const iconsOpen = document.querySelectorAll('.fa-eye');
// iconsOpen.forEach(elem => {
//     elem.addEventListener('click', event => {
//         event.target.classList.add('invisible');
//         event.target.nextElementSibling.classList.remove('invisible');
//         event.target.previousElementSibling.setAttribute('type', 'text');
//     })
// })
//
// const iconClose = document.querySelectorAll('.fa-eye-slash');
// const inputs = document.querySelectorAll('.input');
//
// iconClose.forEach(elem => {
//     elem.addEventListener('click', event => {
//         event.target.classList.add('invisible');
//         event.target.previousElementSibling.classList.remove('invisible');
//         for (const input of inputs) {
//             if (event.target.dataset.first) {
//                 document.querySelector('.first[data-second="first"]').setAttribute('type', 'password');
//             }
//             if (event.target.dataset.second) {
//                 document.querySelector('.second[data-second="second"]').setAttribute('type', 'password');
//             }
//
//         }
//     })
// })