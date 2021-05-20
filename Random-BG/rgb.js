var main = document.getElementById('main')
var button = document.getElementById('button')
var content = document.getElementById('content')

button.onclick = function () { randomBG() }

function randomBG() {
    var red = Math.round(Math.random() * 256);
    var green = Math.round(Math.random() * 256);
    var blue = Math.round(Math.random() * 256);
    main.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    content.innerText = "RGB(" + red + ", " + green + ", " + blue + ")"
}





