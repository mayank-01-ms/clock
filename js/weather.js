const metaTheme = document.querySelector("meta[name = 'theme-color']");
const background = document.getElementById("background");
const weatherArea = document.getElementById("weather");
const footer = document.querySelector("footer nav ul");
weatherArea.style.display = 'none';
footer.style.display = 'none';

let date = new Date();

let addDays = (date, days) => {
    let result = date;
    result.setDate(result.getDate() + days);
    return result;
}

const temperatureArea = document.getElementById("ct");
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
status.innerHTML = "Clear";

const thirdDay = document.getElementById("third-day-date");
thirdDay.innerHTML = addDays(date, 3).toLocaleDateString();

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

let snowWeather = () => {
    createSnow();
    background.classList.add('snow');
    let div = document.createElement('div');
    div.classList.add("snow-flake-icon");
    weatherIcon.append(div);        
    footer.style.background = "#2395ff";
    metaTheme.setAttribute("content", "#2395ff");
}

let clearWeather = () => {
    background.classList.add('clear');
    let sun = document.createElement('div');
    sun.classList.add("sun");
    weatherIcon.append(sun);

    footer.style.background = "#5896fd";
    metaTheme.setAttribute("content", "#5896fd");

    if (date.getHours() >= 19){
        background.classList.add('night');
        createStars();
        footer.style.background = "#021a48";
        metaTheme.setAttribute("content", "#021a48");
        sun.remove();
        let moon = document.createElement('div');
        moon.classList.add("moon");
        weatherIcon.append(moon);
    }
}

let createThunder = () => {
    let thunder = document.createElement('div');
    thunder.classList.add('thunder');
    background.append(thunder);
}

let fogWeather = () => {
    background.classList.add('foggy');
    createFog();
    footer.style.background = "#333";
    metaTheme.setAttribute("content", "#333");
}

let rainWeather = () => {
    background.classList.add('rainy');
    createRain();
    footer.style.background = "#9bc5c3";
    metaTheme.setAttribute("content", "#616161");
}

let thunderWeather = () => {
    background.classList.add('rainy');
    createRain();
    createThunder();
    footer.style.background = "#9bc5c3";
    metaTheme.setAttribute("content", "#616161");
}

let cloudyWeather = () => {
    background.classList.add('cloudy');
    createClouds();
    footer.style.background = "#d6a4a4";
    metaTheme.setAttribute("content", "#d6a4a4");
}

// fogWeather()
// snowWeather()
// clearWeather()
// rainWeather()
// thunderWeather();
// cloudyWeather()

let convertTimestamptoTime = unixTimestamp => { 

    // convert to milliseconds and  
    // then create a new Date object 
    dateObj = new Date(unixTimestamp * 1000); 
    utcString = dateObj.toUTCString(); 
    return dateObj.getHours() + ':' + dateObj.getMinutes();
} 

let updateWeather = (data) => {
    console.log(data)
    temperatureArea.innerHTML = data.current.temp;
    status.innerHTML = data.current.weather[0].main;
    windSpeed.innerHTML = data.current.wind_speed + 'KM/H';
    windSpeedLogo.style.transform = `rotate(${data.current.wind_deg})`;
    feelsLike.innerHTML = data.current.feels_like;
    humidity.innerHTML = data.current.humidity + ' %';
    uvIndex.innerHTML = data.current.uvi;
    sunrise.innerHTML = convertTimestamptoTime(data.current.sunrise);
    sunset.innerHTML = convertTimestamptoTime(data.current.sunset);
    pressure.innerHTML = data.current.pressure + ' hPa';
    visibility.innerHTML = data.current.visibility + ' Metres';

    let rlw = data.current.weather[0].main;
    console.log(rlw)
    if (rlw == 'Fog' || rlw == 'Mist' || rlw == 'Smoke' || rlw == 'Haze'){
        fogWeather();
    } else
    if (rlw == 'Snow'){
        snowWeather();
    } else if (rlw == 'Rain' || rlw == 'Drizzle'){
        rainWeather();
    } else if (rlw == 'Thunderstorm'){
        thunderWeather();
    } else if (rlw == 'Clear'){
        clearWeather();
    }else if (rlw == 'Clouds'){
        cloudyWeather();
    }
}

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

        fetch(url)
        .then(
            response => {
            weatherArea.style.display = 'block';
            footer.style.display = 'flex';
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
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
    })
}
else
    console.error('No location access')
let apiResponse =  `               

{
"lat": 40.12,
"lon": -96.66,
"timezone": "America/Chicago",
"timezone_offset": -18000,
"current": {
"dt": 1595243443,
"sunrise": 1595243663,
"sunset": 1595296278,
"temp": 293.28,
"feels_like": 293.82,
"pressure": 1016,
"humidity": 100,
"dew_point": 293.28,
"uvi": 10.64,
"clouds": 90,
"visibility": 10000,
"wind_speed": 4.6,
"wind_deg": 310,
"weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10n"
    },
    {
    "id": 201,
    "main": "Thunderstorm",
    "description": "thunderstorm with rain",
    "icon": "11n"
    }
],
"rain": {
    "1h": 2.93
}
},
"minutely": [
{
    "dt": 1595243460,
    "precipitation": 2.928
},
...
},
"hourly": [
{
    "dt": 1595242800,
    "temp": 293.28,
    "feels_like": 293.82,
    "pressure": 1016,
    "humidity": 100,
    "dew_point": 293.28,
    "clouds": 90,
    "visibility": 10000,
    "wind_speed": 4.6,
    "wind_deg": 123,
    "weather": [
    {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
    }
    ],
    "pop": 0.99,
    "rain": {
    "1h": 2.46
    }
},
...
}
"daily": [
{
    "dt": 1595268000,
    "sunrise": 1595243663,
    "sunset": 1595296278,
    "temp": {
    "day": 298.82,
    "min": 293.25,
    "max": 301.9,
    "night": 293.25,
    "eve": 299.72,
    "morn": 293.48
    },
    "feels_like": {
    "day": 300.06,
    "night": 292.46,
    "eve": 300.87,
    "morn": 293.75
    },
    "pressure": 1014,
    "humidity": 82,
    "dew_point": 295.52,
    "wind_speed": 5.22,
    "wind_deg": 146,
    "weather": [
    {
        "id": 502,
        "main": "Rain",
        "description": "heavy intensity rain",
        "icon": "10d"
    }
    ],
    "clouds": 97,
    "pop": 1,
    "rain": 12.57,
    "uvi": 10.64
},
...
},
"alerts": [
{
    "sender_name": "NWS Tulsa (Eastern Oklahoma)",
    "event": "Heat Advisory",
    "start": 1597341600,
    "end": 1597366800,
    "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible."
},
...
]`;
//   console.log(JSON.parse(apiResponse));
        