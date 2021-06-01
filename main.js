var increaseBtn = document.getElementById("increase")
var decreaseBtn = document.getElementById("decrease")
var resetBtn = document.getElementById("reset")

increaseBtn.addEventListener("click", increase)
decreaseBtn.addEventListener("click", decrease)
resetBtn.addEventListener("click", reset)

function increase(e) {
    var count = document.getElementById("count").textContent

    count = parseInt(count)

    if (count != 0) {
        count = count + 1
    }
    else {
        count = 1
    }

    document.getElementById("count").textContent = count

}

function decrease(e) {
    var count = document.getElementById("count").textContent

    count = parseInt(count)

    if (count != 0) {
        count = count - 1
    }
    else {
        count = -1
    }

    document.getElementById("count").textContent = count
}

function reset() {
    var count = document.getElementById("count").textContent

    count = parseInt(count)

    count = 0

    document.getElementById("count").textContent = count
}