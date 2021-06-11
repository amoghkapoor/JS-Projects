var openModalBtns = document.querySelectorAll('[data-modal-target]')
var closeModalBtns = document.querySelectorAll('[data-modal-close-button]')
var overlay = document.querySelector("#overlay")

openModalBtns.forEach(element => {
    element.addEventListener("click", () => {
        const modal = document.querySelector(element.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalBtns.forEach(element => {
    element.addEventListener("click", () => {
        const modal = element.closest("#modal")
        closeModal(modal)
    })
})

overlay.addEventListener("click", () => {
    const modal = document.querySelectorAll(".modal.active")
    modal.forEach(element => { closeModal(element) })
})

function openModal(modal) {
    if (modal == null)
        return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal) {
    if (modal == null)
        return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}