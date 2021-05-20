setInterval(twentyfourHourClock, 1000)
setInterval(twelveHourClock, 1000)
setInterval(analogClock, 1000)

// Digital Clock

var twentyfourHourTime = document.getElementById("twentyfourHourClock")
var twelveHourTime = document.getElementById("twelveHourClock")
var dateDiv = document.getElementById("date")

var twentyFourHour = document.getElementById("twentyfour-hour")
var twelveHour = document.getElementById("twelve-hour")

twelveHourTime.style.display = "none"
twentyfourHourTime.style.display = "block"

function hide24() {
    twelveHourTime.style.display = "block"
    twentyfourHourTime.style.display = "none"
    twelveHour.style.display = "none"
    twentyFourHour.style.display = "block"
}

function show24() {
    twelveHourTime.style.display = "none"
    twentyfourHourTime.style.display = "block"
    twelveHour.style.display = "block"
    twentyFourHour.style.display = "none"
}

function twentyfourHourClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.getDate();
    var year = now.getFullYear()

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[now.getDay()];

    var monthName = new Array(12);
    monthName[0] = "January";
    monthName[1] = "February";
    monthName[2] = "March";
    monthName[3] = "April";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "August";
    monthName[8] = "September";
    monthName[9] = "October";
    monthName[10] = "November";
    monthName[11] = "December";
    var month = monthName[now.getMonth()];

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    var time = hours + ":" + minutes + ":" + seconds;
    twentyfourHourTime.innerText = time;

    var calendar = day + ", " + month + " " + date + ", " + year;
    dateDiv.innerText = calendar

};

function twelveHourClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.getDate();
    var year = now.getFullYear()
    var session = "AM"

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[now.getDay()];

    var monthName = new Array(12);
    monthName[0] = "January";
    monthName[1] = "February";
    monthName[2] = "March";
    monthName[3] = "April";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "August";
    monthName[8] = "September";
    monthName[9] = "October";
    monthName[10] = "November";
    monthName[11] = "December";
    var month = monthName[now.getMonth()];


    if (hours >= 12) {
        hours = hours - 12
        session = "PM"
    }
    if (hours == 0) {
        hours = 12
    }

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    twelveHourTime.innerText = time;

    var calendar = day + ", " + month + " " + date + ", " + year;
    dateDiv.innerText = calendar

};

// Analog Clock

var hourHand = document.getElementById("hourHand")
var minuteHand = document.getElementById("minuteHand")
var secondHand = document.getElementById("secondHand")

function analogClock() {
    var now = new Date()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    var secDeg = seconds * 6

    var secRatio = seconds / 60
    var minDeg = (minutes + secRatio) * 6

    if (hour > 12) {
        hour = hour - 12
    }
    var minRatio = (minutes + secRatio) / 60
    var hrDeg = (hour + minRatio) * 30

    secDeg = "rotate(" + secDeg + "deg)"
    minDeg = "rotate(" + minDeg + "deg)"
    hrDeg = "rotate(" + hrDeg + "deg)"

    secondHand.style.transform = secDeg
    minuteHand.style.transform = minDeg
    hourHand.style.transform = hrDeg

}

for (var i = 1; i < 13; i++) {
    var id = 'number' + i;
    console.log(id)
    var element = document.getElementById(id)
    var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var deg = 30 * value[i - 1]
    deg = 'rotate(' + deg + 'deg)'
    console.log(deg)
    element.style.transform = deg
    console.log(element)
}

analogClock()
twentyfourHourClock()
twelveHourClock()