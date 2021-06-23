var tabButtons = document.querySelectorAll(".tab-btn")
var contentTabs = document.querySelectorAll(".content")

tabButtons.forEach(button => {
    button.addEventListener("click", switchTab)
})

function switchTab(e) {
    const button = (e.target)
    tabButtons.forEach(button => {
        button.classList.remove("active")
    })

    contentTabs.forEach(tab => {
        tab.classList.remove("active")
    })

    button.classList.add("active")
    var contentId = button.dataset.id
    var content = document.querySelector(`#${contentId}`)
    content.classList.add("active")
}