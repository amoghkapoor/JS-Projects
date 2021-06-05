var filter = document.getElementById("filter")
filter.addEventListener("keyup", filterItems)

function filterItems(e) {
    var value = this.value.toUpperCase();

    var ul = document.getElementById("nameList")
    var items = document.querySelectorAll(".names")

    for (var i = 0; i < items.length; i++) {
        var text = items[i].textContent.toUpperCase()

        if (text.indexOf(value) != -1) {
            items[i].style.display = ""
        }
        else {
            items[i].style.display = "none"
        }
    }
}