// --------------------OUR SERVICES TABS----------------------------------------------------

const titlesTabsList = document.querySelector(".list-services-titles");

titlesTabsList.addEventListener("click", (event) => {
  document.querySelector(".active-service").classList.remove("active-service");
  event.target.classList.add("active-service");

  const titleAttribute = event.target.dataset.title;
  document
    .querySelector(".visible-article")
    .classList.remove("visible-article");
  document
    .querySelector(`.service-article[data-title='${titleAttribute}']`)
    .classList.add("visible-article");
});

// --------------------OUR AMAZING WORKS----------------------------------------------------

const filterTabs = document.querySelector(".works-gallery-filter-titles");
const buttonMoreImg = document.querySelector(".more-img-btn");
const allTitles = document.querySelectorAll(".gallery-article");

for (const title of allTitles) {
  console.log(title.getAttribute("data-title"));
}

filterTabs.addEventListener("click", (event) => {
  let targetAttr = event.target.dataset.title;
  const allArticles = document.querySelectorAll(".gallery-article");

  if (targetAttr === "All") {
    document.querySelector(".filter-active").classList.remove("filter-active");
    event.target.classList.add("filter-active");
    buttonMoreImg.classList.remove("hidden-btn");
    for (const title of allTitles) {
      title.classList.remove("hidden-article");
    }
    for (let i = 12; i < allArticles.length; i++) {
      allArticles[i].classList.add("hidden-article");
    }
  } else {
    document.querySelector(".filter-active").classList.remove("filter-active");
    event.target.classList.add("filter-active");
    for (const article of allArticles) {
      article.classList.add("hidden-article");
    }
    for (const article of allArticles) {
      if (article.getAttribute("data-title") === targetAttr) {
        article.classList.remove("hidden-article");
      }
    }
  }
});

function showImgs() {
  document.querySelector(".box").classList.add("hidden-loading");
  const hiddenArticles = document.querySelectorAll(".hidden-article");
  for (const article of hiddenArticles) {
    article.classList.remove("hidden-article");
  }

}

buttonMoreImg.addEventListener("click", (event) => {
  buttonMoreImg.classList.add("hidden-btn");
  document.querySelector(".hidden-loading").classList.remove("hidden-loading");
  setTimeout(showImgs, 2000);
});


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

// --------------------MASONRY-------------------------------------------------------

const buttonMoreImg2 = document.querySelector(".more-img-btn2");
const elem = document.querySelector(".grid");

function showImgs2() {
  document.querySelector(".box2").classList.add("hidden-loading");
  const allMasonryImgs = document.querySelectorAll(".grid-item");
  for (const masonryImg of allMasonryImgs) {
    masonryImg.classList.remove("masonry-hidden");
  }
  document.querySelector(".box2").classList.add("hidden-loading2");
  const iso = new Isotope(elem, {
    // options
    itemSelector: ".grid-item",
    layoutMode: "masonry",
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });
}

buttonMoreImg2.addEventListener("click", (event) => {
  buttonMoreImg2.classList.add("hidden-btn");
  document
    .querySelector(".hidden-loading2")
    .classList.remove("hidden-loading2");
  setTimeout(showImgs2, 2000);
});

const iso = new Isotope(elem, {
  // options
  itemSelector: ".grid-item",
  layoutMode: "masonry",
  masonry: {
    columnWidth: ".grid-sizer",
  },
});
