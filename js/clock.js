let hoursArea = document.getElementById("hours");
let minutesArea = document.getElementById("minutes");
let dateArea = document.getElementById("date");
let tfArea = document.getElementById("tff");

let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");

let timeFormat = localStorage.getItem("timeFormat");

if (timeFormat === null)
    timeFormat = "twelve";

if (timeFormat != "twelve")
    tfArea.style.display = "none";

let initiater = () => {
    let date = new Date();  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = date.getSeconds();
    
    if (timeFormat == "twelve"){
        tfArea.innerHTML = hours > 12 ? "pm" : "am";
        hours = hours > 12 ? hours - 12 : hours;
    }
    hoursArea.innerHTML = hours;
    minutesArea.innerHTML = minutes;
    dateArea.innerHTML = date.toDateString();
    

    hours = hours > 12 ? hours - 12 : hours;
    hourHand.style.transform = `rotate(${(hours*30)+(minutes/12)}deg)`;
    minuteHand.style.transform = `rotate(${minutes*6}deg)`;
    secondHand.style.transform = `rotate(${seconds*6}deg)`;
}

setInterval(initiater, 1000);