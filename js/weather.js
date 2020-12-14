const metaTheme = document.querySelector("meta[name = 'theme-color']");
const background = document.getElementById("background");
const welcomeScreen = document.getElementById("welcome");
const weatherArea = document.getElementById("weather");
const locationArea = document.getElementById("location");
weatherArea.style.display = 'none';

const hiddenfcArea = document.querySelector('.hidden-fc');
const expandfcArea = document.querySelector('.expand-fc');
expandfcArea.addEventListener("click", () => {
  if (hiddenfcArea.style.display === 'none'){
    hiddenfcArea.style.display = 'block';
    expandfcArea.style.borderTop = '1px solid var(--wborder)';
    expandfcArea.innerHTML = 'Hide rows'
  }
  else if (hiddenfcArea.style.display === 'block'){
    hiddenfcArea.style.display = 'none';
    expandfcArea.innerHTML = 'Show 4 more rows';
  }
})

let date = new Date();

let addDays = (date, days) => {
    let result = date;
    result.setDate(result.getDate() + days);
    return result;
}

const firstdaymm = document.getElementById("fc-firstday");
const seconddaymm = document.getElementById("fc-secondday");
const thirddaymm = document.getElementById("fc-thirdday");
const fourthdaymm = document.getElementById("fc-fourthday");
const fifthdaymm = document.getElementById("fc-fifthday");
const sixthdaymm = document.getElementById("fc-sixthday");
const seventhdaymm = document.getElementById("fc-seventhday");

const fcfirstimg = document.getElementById("fc-firstimg");
const fcssecondimg = document.getElementById("fc-secondimg");
const fcthirdimg = document.getElementById("fc-thirdimg");
const fcfourthimg = document.getElementById("fc-fourthimg");
const fcfifthimg = document.getElementById("fc-fifthimg");
const fcsixthimg = document.getElementById("fc-sixthimg");
const fcseventhimg = document.getElementById("fc-seventhimg");

const temperatureArea = document.getElementById("current-temperature");
const windSpeed = document.getElementById("wind-speed");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const uvIndex = document.getElementById("uv-index");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");

const dateArea = document.getElementById("date");
dateArea.innerHTML = date.toLocaleDateString();

const status = document.getElementById("status");

const thirdDay = document.getElementById("third-day-date");
const fourthDay = document.getElementById("fourth-day-date");
const fifthDay = document.getElementById("fifth-day-date");
const sixthDay = document.getElementById("sixth-day-date");
const seventhDay = document.getElementById("seventh-day-date");
thirdDay.innerHTML = addDays(date, 3).toDateString().slice(0, -5);
fourthDay.innerHTML = addDays(date, 1).toDateString().slice(0, -5);
fifthDay.innerHTML = addDays(date, 1).toDateString().slice(0, -5);
sixthDay.innerHTML = addDays(date, 1).toDateString().slice(0, -5);
seventhDay.innerHTML = addDays(date, 1).toDateString().slice(0, -5);

const windSpeedLogo = document.querySelector(".wind-speed-logo");
const weatherIcon = document.querySelector(".weather-icon");

let createStars = () => {            
    for (let i = 0; i < 80; i++){
        let stars = document.createElement("span");
        stars.classList.add("twinkle");
        stars.style.top = Math.random() * 100 + 'vh';
        stars.style.left = Math.random() * 100 + 'vw';
        stars.style.height = stars.style.width = 1 + Math.random() * 2 + 'px';
        stars.style.animationDelay = 1 + Math.random() * 4 + 's';
        background.append(stars);
    }
}

let createSnow = () => {            
    for (let i = 0; i < 70; i++){
        let snow = document.createElement("span");
        snow.classList.add("snowflake");
        snow.style.top = Math.random() * 100 + 'vh';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.height = snow.style.width = 5 + Math.random() * 10 + 'px';
        snow.style.animationDuration = 1 + Math.random() * 4 + 's';
        snow.style.fontSize = 0.75 + Math.random() * 0.5 + 'rem';
        snow.style.opacity = 0.5 + Math.random();
        background.append(snow);
    }
}

let createClouds = () => {            
    for (let i = 0; i < 5; i++){
        let clouds = document.createElement("span");
        clouds.classList.add("clouds");
        clouds.style.top = 0 + Math.random() * 20 + 'vh';
        clouds.style.left = 5 + Math.random() * 5 + 'vw';
        clouds.style.animationDuration = 7 + Math.random() * 10 + 's';
        clouds.style.transform = `scale(${0.2 + Math.random()})`;
        clouds.style.opacity = 0.5 + Math.random() * 0.5;
        background.append(clouds);
    }
}

let createRain = () => {            
    for (let i = 0; i < 100; i++){
        let rain = document.createElement("span");
        rain.classList.add("raindrop");
        rain.style.top = Math.random() * 100 + 'vh';
        rain.style.left = Math.random() * 100 + 'vw';
        rain.style.height = 10 + Math.random() * 15 + 'px';
        rain.style.width = 1 + Math.random() * 1 + 'px';
        rain.style.animationDuration = 1 + Math.random() * 1 + 's';
        background.append(rain);
    }
}

let createFog = () => {
    for (let i = 0; i < 20; i++){
        let fog = document.createElement("span");
        fog.classList.add("fog");
        fog.style.top = 2 + Math.random() * 50 + 'vh';
        fog.style.left = Math.random() * 100 + 'vw';
        fog.style.height = 120 + Math.random() * 10 + 'px';
        fog.style.width = 60 + Math.random() * 10 + 'px';
        fog.style.margin = 2 + Math.random() * 5 + 'px';
        fog.style.animationDelay = -10 + Math.random() * 4 + 's';
        fog.style.animationDuration = 10 + Math.random() * 10 + 's';
        background.append(fog);
    }
}

let createThunder = () => {
    let thunder = document.createElement('div');
    thunder.classList.add('thunder');
    background.append(thunder);
}

let snowWeather = () => {
    createSnow();
    background.classList.add('snow');
    let div = document.createElement('div');
    div.classList.add("snow-flake-icon");
    weatherIcon.append(div);        
    metaTheme.setAttribute("content", "#2395ff");
}

let clearWeather = (time = 'day') => {
    background.classList.add('clear');
    let sun = document.createElement('div');
    sun.classList.add("sun");
    weatherIcon.append(sun);

    metaTheme.setAttribute("content", "#5896fd");

    if (time == 'night'){
        background.classList.add('night');
        createStars();
        metaTheme.setAttribute("content", "#021a48");
        sun.remove();
        let moon = document.createElement('div');
        moon.classList.add("moon");
        weatherIcon.append(moon);
    }
}

let fogWeather = () => {
    background.classList.add('foggy');
    createFog();
    metaTheme.setAttribute("content", "#333");
}

let rainWeather = () => {
    background.classList.add('rainy');
    createRain();
    metaTheme.setAttribute("content", "#616161");
}

let thunderWeather = () => {
    background.classList.add('rainy');
    createRain();
    createThunder();
    metaTheme.setAttribute("content", "#616161");
}

let cloudyWeather = () => {
    background.classList.add('cloudy');
    createClouds();
    metaTheme.setAttribute("content", "#d6a4a4");
}

let convertTimestamptoTime = unixTimestamp => { 

    // convert to milliseconds and then create a new Date object 
    // and return time in 12 hour format

    let dateObj = new Date(unixTimestamp * 1000); 
    dateObj.toUTCString(); 
    let hours = dateObj.getHours();
    let ampm = hours > 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours - 12 : hours;
    let minutes = dateObj.getMinutes();
    return hours + ':' + minutes + ' ' + ampm;
} 

let isdayorNight = (sunrise, sunset) => {
  let tempDateObj = new Date(sunrise * 1000);
  let sstempDateObj = new Date(sunset * 1000);
  if (date.getTime() >= tempDateObj.getTime() && date.getTime() <= sstempDateObj.getTime())
    return 'day';
  return 'night';
}

let getWeatherIcon = description => {
    if (description == 'Fog' || description == 'Mist' || description == 'Smoke' || description == 'Haze'){
        return 'fog.png';
    } else
    if (description == 'Snow'){
        return 'snow.png';
    } else if (description == 'Rain' || description == 'Drizzle'){
        return 'rain.png'
    } else if (description == 'Thunderstorm'){
        return 'thunder.png'
    } else if (description == 'Clear'){
        return 'sun.png';
    }else if (description == 'Clouds'){
        return 'clouds.png';
    }
    return 'sun.png';
}

let updateWeather = (data) => {
    weatherArea.style.display = 'block';

    temperatureArea.innerHTML = Math.round(data.current.temp) + '&deg; C';
    status.innerHTML = data.current.weather[0].main;

    firstdaymm.innerHTML = Math.round(data.daily[0].temp.max) + ' / ' + Math.round(data.daily[0].temp.min);
    seconddaymm.innerHTML = Math.round(data.daily[1].temp.max) + ' / ' + Math.round(data.daily[1].temp.min);
    thirddaymm.innerHTML = Math.round(data.daily[2].temp.max) + ' / ' + Math.round(data.daily[2].temp.min);
    fourthdaymm.innerHTML = Math.round(data.daily[3].temp.max) + ' / ' + Math.round(data.daily[3].temp.min);
    fifthdaymm.innerHTML = Math.round(data.daily[4].temp.max) + ' / ' + Math.round(data.daily[4].temp.min);
    sixthdaymm.innerHTML = Math.round(data.daily[5].temp.max) + ' / ' + Math.round(data.daily[5].temp.min);
    seventhdaymm.innerHTML = Math.round(data.daily[6].temp.max) + ' / ' + Math.round(data.daily[6].temp.min);

    fcfirstimg.src = 'images/' + getWeatherIcon(data.daily[0].weather[0].main);
    fcssecondimg.src = 'images/' + getWeatherIcon(data.daily[1].weather[0].main);
    fcthirdimg.src = 'images/' + getWeatherIcon(data.daily[2].weather[0].main);
    fcfourthimg.src = 'images/' + getWeatherIcon(data.daily[3].weather[0].main);
    fcfifthimg.src = 'images/' + getWeatherIcon(data.daily[4].weather[0].main);
    fcsixthimg.src = 'images/' + getWeatherIcon(data.daily[5].weather[0].main);
    fcseventhimg.src = 'images/' + getWeatherIcon(data.daily[6].weather[0].main);

    windSpeed.innerHTML = data.current.wind_speed + ' KM/H';
    windSpeedLogo.style.transform = `rotate(${data.current.wind_deg + 90}deg)`;
    feelsLike.innerHTML = Math.round(data.current.feels_like) + '&deg; C';
    humidity.innerHTML = data.current.humidity + ' %';
    uvIndex.innerHTML = data.current.uvi;
    sunrise.innerHTML = convertTimestamptoTime(data.current.sunrise);
    sunset.innerHTML = convertTimestamptoTime(data.current.sunset);
    pressure.innerHTML = data.current.pressure + ' Pa';
    visibility.innerHTML = data.current.visibility/1000 + ' KM';

    let mainStatus = data.current.weather[0].main;
    if (mainStatus == 'Fog' || mainStatus == 'Mist' || mainStatus == 'Smoke' || mainStatus == 'Haze'){
        fogWeather();
    } else
    if (mainStatus == 'Snow'){
        snowWeather();
    } else if (mainStatus == 'Rain' || mainStatus == 'Drizzle'){
        rainWeather();
    } else if (mainStatus == 'Thunderstorm'){
        thunderWeather();
    } else if (mainStatus == 'Clear'){
        clearWeather(isdayorNight(data.current.sunrise, data.current.sunset));
    }else if (mainStatus == 'Clouds'){
        cloudyWeather();
    }
}

let setCityName = (latitude, longitude) => {

    const privateToken = 'pk.dd84ee8a4b20a86403e581cfa93f58f7';  
    let cityUrl = `https://us1.locationiq.com/v1/reverse.php?key=${privateToken}&lat=${latitude}&lon=${longitude}+&format=json`;
    fetch(cityUrl)
    .then(
        response => {
            if (response.status !== 200){
                return '';
            }
            response.json().then(data => {
                let cityName = data.address.city;
                if (cityName == undefined)
                    cityName = data.address.county;
                if (cityName == undefined)
                    cityName = data.address.state;
                
                let storedCityName = localStorage.getItem('cityName');
                if (storedCityName == null)
                  locationArea.innerHTML = cityName + ', ';
                else if (storedCityName == cityName)
                  locationArea.innerHTML = cityName + ', ';
                else
                  locationArea.innerHTML = storedCityName + ', ' + cityName;
            })
        }
    )
}

let fetchWeather = (latitude, longitude) => {

    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(
        response => {
        weatherArea.style.display = 'block';
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(data => {
                updateWeather(data);
            });
        }
    )
    .catch(err => {
        console.log('Fetch Error :', err);
    });
}

let getCityPopup = () => {
    let storedLatitude = localStorage.getItem('latitude');
    let storedLongitude = localStorage.getItem('longitude');
    if (storedLatitude == null || storedLongitude == null){
        welcomeScreen.style.display = 'flex';
        metaTheme.setAttribute('content', '#fc466b');
    }
    else{
        setCityName(storedLatitude, storedLongitude);
        fetchWeather(storedLatitude, storedLongitude);
    }
}

let startApp = () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            localStorage.clear();
            setCityName(latitude, longitude);
            fetchWeather(latitude, longitude);
        }, () => {
            getCityPopup();
        })
    }
}

startApp();

const form = document.querySelector('#welcome form');
form.addEventListener("submit", e => {
    e.preventDefault();
    let city = document.getElementById('city').value.trim();

    let checkcityurl = `https://us1.locationiq.com/v1/search.php?key=pk.dd84ee8a4b20a86403e581cfa93f58f7&format=json&q=${city}`;
    fetch(checkcityurl)
    .then(
        response => {
            if (response.status !== 200){
                const errcmsg = document.getElementById('err-c-msg');
                errcmsg.innerHTML = '* Invalid city. Please enter a valid city.'
            }
            response.json().then(data => {
                let latitude = data[0].lat;
                let longitude = data[0].lon;
                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);
                localStorage.setItem('cityName', city);

                welcomeScreen.style.display = 'none';
                setCityName(latitude, longitude);
                fetchWeather(latitude, longitude);
            })
        }
    )
})
