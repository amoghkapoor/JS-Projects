var main = document.getElementById('main')
var button = document.getElementById('button')
var content = document.getElementById('content')

var value = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

button.onclick = function () { randomBG() }

function randomBG() {
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color = color + value[Math.floor(Math.random() * 16)]
    }
    main.style.backgroundColor = "" + color + ""
    content.innerText = "" + color + ""
}