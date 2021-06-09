// Function call after 1000ms
setInterval(countdownTime, 1000)

// Countdown
function countdownTime() {
    // Select elements
    var daysElement = document.getElementById("days")
    var hoursElement = document.getElementById("hours")
    var minutesElement = document.getElementById("minutes")
    var secondsElement = document.getElementById("seconds")

    // Today's date
    var presentDate = new Date()
    var presentYear = presentDate.getFullYear()
    var presentMili = presentDate.getTime()

    // New year's date
    var newYearDate = new Date("Jan 1, 2000 00:00:00")
    newYearDate.setFullYear(presentYear + 1)
    var countdownMili = newYearDate.getTime()

    var time = countdownMili - presentMili
    var days = Math.floor(time / (1000 * 60 * 60 * 24))
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((time % (1000 * 60)) / 1000)

    daysElement.textContent = days
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
}
