
let hourPrint = document.querySelector("#hour")
let minute = document.querySelector("#minutes")
let second = document.querySelector("#seconds")
let h5 = document.querySelector("h5")

let seconds = 1;
let minutes = 1;
let hour = 1;
let Interval;
function Time() {
    Interval = setInterval(() => {

        if (seconds === 60) {
            minute.innerHTML = minutes++
            seconds = 1
        }
        else if (minutes === 60) {
            hourPrint.innerHTML = hour++
            minutes = 1
        }
        second.innerHTML = seconds++
    }, 1000)
}

function Break() {
    clearInterval(Interval);
}
function Reset() {
    clearInterval(Interval);
    second.innerHTML = seconds = "00"
    hourPrint.innerHTML = hour = "00"
    minute.innerHTML = minutes = "00"

}










