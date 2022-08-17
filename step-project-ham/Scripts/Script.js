// ---------------OUR SERVICES TABS----------------

const titlesTabsList = document.querySelector('.list-services-titles');

titlesTabsList.addEventListener('click', (event) => {
    document.querySelector('.active-service').classList.remove('active-service');
    event.target.classList.add('active-service');

    const titleAttribute = event.target.dataset.title;
    document.querySelector('.visible-article').classList.remove('visible-article');
    document.querySelector(`.service-article[data-title='${titleAttribute}']`).classList.add('visible-article');
})

// --------------------SLIDER----------------------


// --------------------SLIDER----------------------

let swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
