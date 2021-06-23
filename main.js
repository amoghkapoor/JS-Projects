var switchBtn = document.querySelector(".switch-btn")
var video = document.querySelector(".video-container")

switchBtn.addEventListener("click", playPause)

function playPause(e) {
    if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide")
        video.pause()
    }
    else {
        switchBtn.classList.remove("slide")
        video.play()
    }
}