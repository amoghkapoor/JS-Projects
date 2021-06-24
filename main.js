// Carousel Slide and Images
var carouselSlide = document.querySelector(".carousel")
var carouselImages = document.querySelectorAll(".carousel-img")

// Buttons
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

// Counter
let counter = 1
const width = carouselImages[0].clientWidth

// Starting at the first image instead of clone
carouselSlide.style.transform = `translateX(${-width * counter}px)`

// Event Listeners
prevBtn.addEventListener("click", slideBack)
nextBtn.addEventListener("click", slideFront)

function slideBack(e) {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform .7s ease-in-out"
    counter--
    carouselSlide.style.transform = `translateX(${-width * counter}px)`
}

function slideFront(e) {
    if (counter >= carouselImages.length - 1) return;

    carouselSlide.style.transition = "transform .7s ease-in-out"
    counter++
    carouselSlide.style.transform = `translateX(${-width * counter}px)`
}

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id == "last-clone") {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2
        carouselSlide.style.transform = `translateX(${-width * counter}px)`
    }

    if (carouselImages[counter].id == "first-clone") {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = `translateX(${-width * counter}px)`
    }
})