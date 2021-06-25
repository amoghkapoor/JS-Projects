const card = document.querySelector(".card")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const caption = document.querySelector(".caption")
const sizes = document.querySelector(".sizes")
const purchase = document.querySelector(".purchase")
const sneaker = document.querySelector(".sneaker img")

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none"
    title.style.transform = "translateZ(150px)"
    caption.style.transform = "translateZ(100px)"
    sizes.style.transform = "translateZ(100px)"
    purchase.style.transform = "translateZ(75px)"
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)"
})

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease-out"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = "translateZ(0px)"
    caption.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
    sizes.style.transform = "translateZ(0px)"




})