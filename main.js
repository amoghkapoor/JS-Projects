var btn = document.querySelector(".hamburger")
var list = document.getElementById("list")

btn.addEventListener("click", toggle)

function toggle(e) {
    list.classList.toggle("toggle")
}