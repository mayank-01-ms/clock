let hoursArea = document.getElementById("hours");
let minutesArea = document.getElementById("minutes");
let dateArea = document.getElementById("date");

let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");

let initiater = () => {
    let date = new Date();  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = date.getSeconds();
    
    hoursArea.innerHTML = hours;
    minutesArea.innerHTML = minutes;
    dateArea.innerHTML = date.toDateString();

    hours = hours > 12 ? hours - 12 : hours;
    hourHand.style.transform = `rotate(${(hours*30)+(minutes/12)}deg)`;
    minuteHand.style.transform = `rotate(${minutes*6}deg)`;
    secondHand.style.transform = `rotate(${seconds*6}deg)`;
}

setInterval(initiater, 1000);