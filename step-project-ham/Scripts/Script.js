// --------------------OUR SERVICES TABS----------------------------------------------------

const titlesTabsList = document.querySelector('.list-services-titles');

titlesTabsList.addEventListener('click', (event) => {
    document.querySelector('.active-service').classList.remove('active-service');
    event.target.classList.add('active-service');

    const titleAttribute = event.target.dataset.title;
    document.querySelector('.visible-article').classList.remove('visible-article');
    document.querySelector(`.service-article[data-title='${titleAttribute}']`).classList.add('visible-article');
})

// --------------------OUR AMAZING WORKS----------------------------------------------------

const filterTabs = document.querySelector('.works-gallery-filter-titles');
const buttonMoreImg = document.querySelector('.more-img-btn');
const allTitles = document.querySelectorAll('.gallery-article');

for (const title of allTitles) {
    console.log(title.getAttribute('data-title'))
}

filterTabs.addEventListener('click', event => {
    let targetAttr = event.target.dataset.title;
    const allArticles = document.querySelectorAll('.gallery-article');
    const allTitles = document.querySelectorAll('.gallery-article');

    if (targetAttr === 'All') {
        document.querySelector('.filter-active').classList.remove('filter-active');
        event.target.classList.add('filter-active')
        buttonMoreImg.classList.remove('hidden-btn');
        for (const title of allTitles) {
            title.classList.remove('hidden-article');
        }
        for (let i = 12; i < allArticles.length; i++) {
            allArticles[i].classList.add('hidden-article');
        }
    } else {
        document.querySelector('.filter-active').classList.remove('filter-active');
        event.target.classList.add('filter-active')
        for (const article of allArticles) {
            article.classList.add('hidden-article');
        }
        for (const article of allArticles) {
            if (article.getAttribute('data-title') === targetAttr) {
                article.classList.remove('hidden-article')
            } 
        }

    }
})

function showImgs() {
    document.querySelector('.box').classList.add('hidden-loading');
    const allArticles = document.querySelectorAll('.gallery-article');
    for (const article of allArticles) {
        article.classList.remove('hidden-article');
    }
}

buttonMoreImg.addEventListener('click', event => {
    buttonMoreImg.classList.add('hidden-btn');
    document.querySelector('.hidden-loading').classList.remove('hidden-loading');
    setTimeout(showImgs, 2000)
})

// buttonMoreImg.addEventListener('click', event => {
//     const allArticles = document.querySelectorAll('.gallery-article');
//     for (const article of allArticles) {
//         article.classList.remove('hidden-article');
//     }
//     buttonMoreImg.classList.add('hidden-btn');
// })

// --------------------SLIDER-------------------------------------------------------

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
