let imgArr = document.querySelectorAll('.img-people')
console.log(imgArr[0])
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + imgArr[index] + "</span>";
        },
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});