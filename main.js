var form = document.getElementById("form")
var list = document.getElementById("items")
var filter = document.getElementById("filter")

form.addEventListener("submit", addItem)
list.addEventListener("click", remove)
filter.addEventListener("keyup", filterItems)

function addItem(e) {
    e.preventDefault()

    var newItem = document.getElementById("textbox").value
    var closeBtn = document.createElement("button")
    closeBtn.className = "close"
    closeBtn.appendChild(document.createTextNode("\u2715"))

    var li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(closeBtn)

    list.appendChild(li)
    document.getElementById("textbox").value = ''
}

function remove(e) {
    if (e.target.classList.contains("close")) {
        var li = e.target.parentElement
        list.removeChild(li)
    }
}

function filterItems() {
    var value = this.value.toLowerCase()
    var listItems = document.querySelectorAll(".list-group-item")
    Array.from(listItems).forEach((item) => {
        var itemName = item.firstChild.textContent;
        console.log(itemName)
        if (itemName.toLowerCase().indexOf(value) != -1) {
            item.style.display = "flex"
        }
        else {
            item.style.display = "none"
        }
    })
}