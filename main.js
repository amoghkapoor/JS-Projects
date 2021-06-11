var button = document.getElementById("open")
var leftSideBar = document.querySelector(".leftSideBar")
var rightSideBar = document.querySelector(".rightSideBar")
var links = document.querySelectorAll("link-list-items")
var outline = document.querySelectorAll(".outline")

button.addEventListener("click", display)
button.addEventListener("click", changeBg)
// links.forEach(element => element.addEventListener("click", function () {
//     console.log("abc")
// }))

var counter = 0

function changeBg() {
    setTimeout(function () {
        if (counter % 2 == 1) {
            button.style.backgroundColor = "#232946"
            document.querySelectorAll(".line").forEach(element => element.style.stroke = "#ffa500")
        }
        else {
            button.style.backgroundColor = "#b8c1ec"
            document.querySelectorAll(".line").forEach(element => element.style.stroke = "#232946")
        }
    }, 100)
}

function display() {
    counter += 1

    if (counter % 2 == 1) {

        leftSideBar.style.display = "block"
        rightSideBar.style.display = "block"
        var width = 0
        anime({
            targets: '.leftSideBar',
            translateX: [-1050, width],
            duration: 900,
            easing: 'easeInOutSine'
        });
        anime({
            targets: '.rightSideBar',
            translateX: [999, width],
            duration: 850,
            easing: 'easeInOutSine'
        });

    }
    if (counter % 2 == 0) {
        var width = 0

        anime({
            targets: '.leftSideBar',
            translateX: [width, -1050],
            duration: 900,
            easing: 'easeInOutSine'
        });
        anime({
            targets: '.rightSideBar',
            translateX: [width, 999],
            duration: 850,
            easing: 'easeInOutSine'
        });

        leftSideBar.style.display = "block"
        rightSideBar.style.display = "block"
    }
}

function displayOutline(e) {
    // console.log("abc")
}

document.getElementById("subscribeSubmit").addEventListener("click", function (e) {
    e.preventDefault()
})