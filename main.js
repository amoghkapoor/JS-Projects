const modal = document.querySelector(".modal")
const previews = document.querySelectorAll(".image")
const fullPreview = document.querySelector(".modal-image")
const imageCaption = document.querySelector(".caption")

previews.forEach(image => {
    image.addEventListener("click", () => {
        modal.classList.add("active");
        fullPreview.classList.add("active");
        var source = image.getAttribute("src")
        var caption = image.getAttribute("alt")
        fullPreview.src = source
        imageCaption.innerText = caption
    })
})

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
        modal.classList.remove("active")
        fullPreview.classList.remove("active")

    }
})