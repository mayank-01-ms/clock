const metaTheme = document.querySelector("meta[name = 'theme-color']");
const background = document.getElementById("background");
const welcomeScreen = document.getElementById("welcome");
const weatherArea = document.getElementById("weather");
const locationArea = document.getElementById("location");
const footer = document.querySelector("footer nav ul");
weatherArea.style.display = 'none';
footer.style.display = 'none';

let date = new Date();

let addDays = (date, days) => {
    let result = date;
    result.setDate(result.getDate() + days);
    return result;
}

const fdaymm = document.getElementById("fc-fday");
const sdaymm = document.getElementById("fc-sday");
const tdaymm = document.getElementById("fc-tday");
const fcfimg = document.getElementById("fc-fimg");
const fcsimg = document.getElementById("fc-simg");
const fctimg = document.getElementById("fc-timg");

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

let convertTimestamptoTime = unixTimestamp => { 

    // convert to milliseconds and then create a new Date object 
    // and return time in 12 hour format

    dateObj = new Date(unixTimestamp * 1000); 
    utcString = dateObj.toUTCString(); 
    let hours = dateObj.getHours();
    let ampm = hours > 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours - 12 : hours;
    let minutes = dateObj.getMinutes();
    return hours + ':' + minutes + ' ' + ampm;
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
    } else if (description == 'Clear' || description == 'clear sky'){
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

    fdaymm.innerHTML = Math.round(data.daily[0].temp.max) + ' / ' + Math.round(data.daily[0].temp.min);
    fdaymm.innerHTML = Math.round(data.daily[1].temp.max) + ' / ' + Math.round(data.daily[1].temp.min);
    fdaymm.innerHTML = Math.round(data.daily[2].temp.max) + ' / ' + Math.round(data.daily[2].temp.min);

    fcfimg.src = 'images/' + getWeatherIcon(data.daily[0].weather[0].description);
    fcsimg.src = 'images/' + getWeatherIcon(data.daily[1].weather[0].description);
    fctimg.src = 'images/' + getWeatherIcon(data.daily[2].weather[0].description);

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
        clearWeather();
    }else if (mainStatus == 'Clouds'){
        cloudyWeather();
    }
}

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

let getCityName = (latitude, longitude) => {
    
    let cityUrl = `https://us1.locationiq.com/v1/reverse.php?key=pk.dd84ee8a4b20a86403e581cfa93f58f7&lat=${latitude}&lon=${longitude}+&format=json`;
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
                locationArea.innerHTML = cityName + ', ';
            })
        }
    )
}

let fetchWeather = (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(
        response => {
        weatherArea.style.display = 'block';
        // footer.style.display = 'flex';
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
        getCityName(storedLatitude, storedLongitude);
        fetchWeather(storedLatitude, storedLongitude);
    }
}

let startApp = () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            getCityName(latitude, longitude);
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

                welcomeScreen.style.display = 'none';
                getCityName(latitude, longitude);
                fetchWeather(latitude, longitude);
            })
        }
    )
})

    let apiRes = `{
        "lat": 26.85,
        "lon": 80.95,
        "timezone": "Asia/Kolkata",
        "timezone_offset": 19800,
        "current": {
          "dt": 1607857964,
          "sunrise": 1607822186,
          "sunset": 1607859879,
          "temp": 24,
          "feels_like": 23.08,
          "pressure": 1012,
          "humidity": 57,
          "dew_point": 14.96,
          "uvi": 0.25,
          "clouds": 0,
          "visibility": 3000,
          "wind_speed": 3.6,
          "wind_deg": 300,
          "weather": [
            {
              "id": 721,
              "main": "Haze",
              "description": "haze",
              "icon": "50d"
            }
          ]
        },
        "minutely": [
          {
            "dt": 1607857980,
            "precipitation": 0
          },
          {
            "dt": 1607858040,
            "precipitation": 0
          },
          {
            "dt": 1607858100,
            "precipitation": 0
          },
          {
            "dt": 1607858160,
            "precipitation": 0
          },
          {
            "dt": 1607858220,
            "precipitation": 0
          },
          {
            "dt": 1607858280,
            "precipitation": 0
          },
          {
            "dt": 1607858340,
            "precipitation": 0
          },
          {
            "dt": 1607858400,
            "precipitation": 0
          },
          {
            "dt": 1607858460,
            "precipitation": 0
          },
          {
            "dt": 1607858520,
            "precipitation": 0
          },
          {
            "dt": 1607858580,
            "precipitation": 0
          },
          {
            "dt": 1607858640,
            "precipitation": 0
          },
          {
            "dt": 1607858700,
            "precipitation": 0
          },
          {
            "dt": 1607858760,
            "precipitation": 0
          },
          {
            "dt": 1607858820,
            "precipitation": 0
          },
          {
            "dt": 1607858880,
            "precipitation": 0
          },
          {
            "dt": 1607858940,
            "precipitation": 0
          },
          {
            "dt": 1607859000,
            "precipitation": 0
          },
          {
            "dt": 1607859060,
            "precipitation": 0
          },
          {
            "dt": 1607859120,
            "precipitation": 0
          },
          {
            "dt": 1607859180,
            "precipitation": 0
          },
          {
            "dt": 1607859240,
            "precipitation": 0
          },
          {
            "dt": 1607859300,
            "precipitation": 0
          },
          {
            "dt": 1607859360,
            "precipitation": 0
          },
          {
            "dt": 1607859420,
            "precipitation": 0
          },
          {
            "dt": 1607859480,
            "precipitation": 0
          },
          {
            "dt": 1607859540,
            "precipitation": 0
          },
          {
            "dt": 1607859600,
            "precipitation": 0
          },
          {
            "dt": 1607859660,
            "precipitation": 0
          },
          {
            "dt": 1607859720,
            "precipitation": 0
          },
          {
            "dt": 1607859780,
            "precipitation": 0
          },
          {
            "dt": 1607859840,
            "precipitation": 0
          },
          {
            "dt": 1607859900,
            "precipitation": 0
          },
          {
            "dt": 1607859960,
            "precipitation": 0
          },
          {
            "dt": 1607860020,
            "precipitation": 0
          },
          {
            "dt": 1607860080,
            "precipitation": 0
          },
          {
            "dt": 1607860140,
            "precipitation": 0
          },
          {
            "dt": 1607860200,
            "precipitation": 0
          },
          {
            "dt": 1607860260,
            "precipitation": 0
          },
          {
            "dt": 1607860320,
            "precipitation": 0
          },
          {
            "dt": 1607860380,
            "precipitation": 0
          },
          {
            "dt": 1607860440,
            "precipitation": 0
          },
          {
            "dt": 1607860500,
            "precipitation": 0
          },
          {
            "dt": 1607860560,
            "precipitation": 0
          },
          {
            "dt": 1607860620,
            "precipitation": 0
          },
          {
            "dt": 1607860680,
            "precipitation": 0
          },
          {
            "dt": 1607860740,
            "precipitation": 0
          },
          {
            "dt": 1607860800,
            "precipitation": 0
          },
          {
            "dt": 1607860860,
            "precipitation": 0
          },
          {
            "dt": 1607860920,
            "precipitation": 0
          },
          {
            "dt": 1607860980,
            "precipitation": 0
          },
          {
            "dt": 1607861040,
            "precipitation": 0
          },
          {
            "dt": 1607861100,
            "precipitation": 0
          },
          {
            "dt": 1607861160,
            "precipitation": 0
          },
          {
            "dt": 1607861220,
            "precipitation": 0
          },
          {
            "dt": 1607861280,
            "precipitation": 0
          },
          {
            "dt": 1607861340,
            "precipitation": 0
          },
          {
            "dt": 1607861400,
            "precipitation": 0
          },
          {
            "dt": 1607861460,
            "precipitation": 0
          },
          {
            "dt": 1607861520,
            "precipitation": 0
          },
          {
            "dt": 1607861580,
            "precipitation": 0
          }
        ],
        "hourly": [
          {
            "dt": 1607857200,
            "temp": 24,
            "feels_like": 23.43,
            "pressure": 1012,
            "humidity": 57,
            "dew_point": 14.96,
            "uvi": 0.25,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.1,
            "wind_deg": 299,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607860800,
            "temp": 23.11,
            "feels_like": 21.28,
            "pressure": 1011,
            "humidity": 45,
            "dew_point": 10.54,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.88,
            "wind_deg": 300,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607864400,
            "temp": 21.78,
            "feels_like": 18.79,
            "pressure": 1010,
            "humidity": 39,
            "dew_point": 7.23,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.34,
            "wind_deg": 309,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607868000,
            "temp": 20.78,
            "feels_like": 17.54,
            "pressure": 1011,
            "humidity": 38,
            "dew_point": 5.96,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.3,
            "wind_deg": 316,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607871600,
            "temp": 19.94,
            "feels_like": 16.39,
            "pressure": 1012,
            "humidity": 39,
            "dew_point": 5.59,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.63,
            "wind_deg": 321,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607875200,
            "temp": 19.08,
            "feels_like": 15.3,
            "pressure": 1012,
            "humidity": 38,
            "dew_point": 4.47,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.63,
            "wind_deg": 326,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607878800,
            "temp": 18.37,
            "feels_like": 14.36,
            "pressure": 1012,
            "humidity": 36,
            "dew_point": 3.28,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.59,
            "wind_deg": 324,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607882400,
            "temp": 17.89,
            "feels_like": 13.69,
            "pressure": 1012,
            "humidity": 34,
            "dew_point": 2.1,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.57,
            "wind_deg": 319,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607886000,
            "temp": 17.48,
            "feels_like": 13.17,
            "pressure": 1011,
            "humidity": 33,
            "dew_point": 1.15,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.54,
            "wind_deg": 314,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607889600,
            "temp": 17,
            "feels_like": 12.58,
            "pressure": 1012,
            "humidity": 33,
            "dew_point": 0.82,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.61,
            "wind_deg": 316,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607893200,
            "temp": 16.43,
            "feels_like": 12.06,
            "pressure": 1012,
            "humidity": 35,
            "dew_point": 1,
            "uvi": 0,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 3.6,
            "wind_deg": 320,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607896800,
            "temp": 15.83,
            "feels_like": 11.51,
            "pressure": 1012,
            "humidity": 37,
            "dew_point": 1.32,
            "uvi": 0,
            "clouds": 10,
            "visibility": 10000,
            "wind_speed": 3.59,
            "wind_deg": 325,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607900400,
            "temp": 15.38,
            "feels_like": 11.1,
            "pressure": 1012,
            "humidity": 38,
            "dew_point": 1.3,
            "uvi": 0,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 3.52,
            "wind_deg": 324,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607904000,
            "temp": 15.01,
            "feels_like": 10.67,
            "pressure": 1012,
            "humidity": 38,
            "dew_point": 1.07,
            "uvi": 0,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 3.53,
            "wind_deg": 326,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607907600,
            "temp": 14.7,
            "feels_like": 10.22,
            "pressure": 1013,
            "humidity": 38,
            "dew_point": 0.83,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.67,
            "wind_deg": 332,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607911200,
            "temp": 14.8,
            "feels_like": 10.56,
            "pressure": 1014,
            "humidity": 40,
            "dew_point": 1.45,
            "uvi": 0.15,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.51,
            "wind_deg": 333,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607914800,
            "temp": 16.93,
            "feels_like": 12.45,
            "pressure": 1015,
            "humidity": 37,
            "dew_point": 2.39,
            "uvi": 0.77,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.04,
            "wind_deg": 334,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607918400,
            "temp": 19.12,
            "feels_like": 14.87,
            "pressure": 1016,
            "humidity": 34,
            "dew_point": 3.27,
            "uvi": 1.93,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.9,
            "wind_deg": 334,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607922000,
            "temp": 21.27,
            "feels_like": 16.89,
            "pressure": 1016,
            "humidity": 29,
            "dew_point": 2.68,
            "uvi": 3.28,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.99,
            "wind_deg": 332,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607925600,
            "temp": 22.91,
            "feels_like": 18.42,
            "pressure": 1016,
            "humidity": 25,
            "dew_point": 2.26,
            "uvi": 4.25,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.98,
            "wind_deg": 331,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607929200,
            "temp": 24.15,
            "feels_like": 19.73,
            "pressure": 1015,
            "humidity": 24,
            "dew_point": 2.42,
            "uvi": 4.41,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4,
            "wind_deg": 320,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607932800,
            "temp": 24.92,
            "feels_like": 20.58,
            "pressure": 1014,
            "humidity": 24,
            "dew_point": 3.07,
            "uvi": 3.63,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.04,
            "wind_deg": 309,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607936400,
            "temp": 25.15,
            "feels_like": 20.78,
            "pressure": 1013,
            "humidity": 24,
            "dew_point": 3.66,
            "uvi": 2.3,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.13,
            "wind_deg": 297,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607940000,
            "temp": 24.76,
            "feels_like": 20.54,
            "pressure": 1012,
            "humidity": 25,
            "dew_point": 3.83,
            "uvi": 1.02,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.99,
            "wind_deg": 294,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607943600,
            "temp": 23.25,
            "feels_like": 19.98,
            "pressure": 1012,
            "humidity": 30,
            "dew_point": 4.75,
            "uvi": 0.25,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.98,
            "wind_deg": 286,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607947200,
            "temp": 20.68,
            "feels_like": 17.32,
            "pressure": 1012,
            "humidity": 32,
            "dew_point": 3.73,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.75,
            "wind_deg": 281,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607950800,
            "temp": 19.57,
            "feels_like": 16.29,
            "pressure": 1013,
            "humidity": 33,
            "dew_point": 3.19,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.5,
            "wind_deg": 284,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607954400,
            "temp": 18.8,
            "feels_like": 15.6,
            "pressure": 1014,
            "humidity": 34,
            "dew_point": 2.65,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.33,
            "wind_deg": 291,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607958000,
            "temp": 18.1,
            "feels_like": 14.81,
            "pressure": 1014,
            "humidity": 34,
            "dew_point": 2.11,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.31,
            "wind_deg": 301,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607961600,
            "temp": 17.56,
            "feels_like": 14.19,
            "pressure": 1015,
            "humidity": 33,
            "dew_point": 1.21,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.21,
            "wind_deg": 319,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607965200,
            "temp": 17.01,
            "feels_like": 13.45,
            "pressure": 1015,
            "humidity": 31,
            "dew_point": 0.18,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.2,
            "wind_deg": 324,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607968800,
            "temp": 16.43,
            "feels_like": 12.91,
            "pressure": 1015,
            "humidity": 32,
            "dew_point": -0.51,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.13,
            "wind_deg": 322,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607972400,
            "temp": 15.99,
            "feels_like": 12.5,
            "pressure": 1014,
            "humidity": 33,
            "dew_point": -0.76,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.09,
            "wind_deg": 314,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607976000,
            "temp": 15.68,
            "feels_like": 12.12,
            "pressure": 1014,
            "humidity": 33,
            "dew_point": -0.62,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.14,
            "wind_deg": 318,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607979600,
            "temp": 15.35,
            "feels_like": 11.71,
            "pressure": 1014,
            "humidity": 34,
            "dew_point": -0.37,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.28,
            "wind_deg": 325,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607983200,
            "temp": 14.99,
            "feels_like": 11.23,
            "pressure": 1014,
            "humidity": 35,
            "dew_point": -0.13,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.46,
            "wind_deg": 339,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607986800,
            "temp": 14.6,
            "feels_like": 10.71,
            "pressure": 1014,
            "humidity": 37,
            "dew_point": 0.11,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.73,
            "wind_deg": 344,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607990400,
            "temp": 14.28,
            "feels_like": 10.21,
            "pressure": 1014,
            "humidity": 38,
            "dew_point": 0.31,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.01,
            "wind_deg": 356,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607994000,
            "temp": 14,
            "feels_like": 9.94,
            "pressure": 1015,
            "humidity": 40,
            "dew_point": 0.63,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.09,
            "wind_deg": 6,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1607997600,
            "temp": 14.26,
            "feels_like": 11.04,
            "pressure": 1016,
            "humidity": 42,
            "dew_point": 1.87,
            "uvi": 0.15,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.1,
            "wind_deg": 11,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608001200,
            "temp": 16.44,
            "feels_like": 14.29,
            "pressure": 1017,
            "humidity": 38,
            "dew_point": 2.19,
            "uvi": 0.76,
            "clouds": 5,
            "visibility": 10000,
            "wind_speed": 0.7,
            "wind_deg": 346,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608004800,
            "temp": 18.57,
            "feels_like": 15.99,
            "pressure": 1018,
            "humidity": 33,
            "dew_point": 2.25,
            "uvi": 0.4,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 1.29,
            "wind_deg": 305,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608008400,
            "temp": 20.27,
            "feels_like": 17.43,
            "pressure": 1018,
            "humidity": 29,
            "dew_point": 2.12,
            "uvi": 0.67,
            "clouds": 11,
            "visibility": 10000,
            "wind_speed": 1.59,
            "wind_deg": 5,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608012000,
            "temp": 22.2,
            "feels_like": 19.46,
            "pressure": 1017,
            "humidity": 25,
            "dew_point": 1.55,
            "uvi": 0.87,
            "clouds": 15,
            "visibility": 10000,
            "wind_speed": 1.34,
            "wind_deg": 296,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608015600,
            "temp": 22.86,
            "feels_like": 19.78,
            "pressure": 1016,
            "humidity": 23,
            "dew_point": 1.17,
            "uvi": 1.12,
            "clouds": 50,
            "visibility": 10000,
            "wind_speed": 1.7,
            "wind_deg": 297,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608019200,
            "temp": 22.67,
            "feels_like": 19.18,
            "pressure": 1015,
            "humidity": 24,
            "dew_point": 1.46,
            "uvi": 0.92,
            "clouds": 69,
            "visibility": 10000,
            "wind_speed": 2.38,
            "wind_deg": 280,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608022800,
            "temp": 22.07,
            "feels_like": 18.9,
            "pressure": 1015,
            "humidity": 27,
            "dew_point": 2.23,
            "uvi": 0.59,
            "clouds": 79,
            "visibility": 10000,
            "wind_speed": 2.18,
            "wind_deg": 277,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1608026400,
            "temp": 21.4,
            "feels_like": 18.43,
            "pressure": 1015,
            "humidity": 29,
            "dew_point": 2.72,
            "uvi": 0.45,
            "clouds": 83,
            "visibility": 10000,
            "wind_speed": 2,
            "wind_deg": 267,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "pop": 0
          }
        ],
        "daily": [
          {
            "dt": 1607841000,
            "sunrise": 1607822186,
            "sunset": 1607859879,
            "temp": {
              "day": 24.98,
              "min": 16.62,
              "max": 26.6,
              "night": 17.89,
              "eve": 23.11,
              "morn": 16.96
            },
            "feels_like": {
              "day": 21.45,
              "night": 13.69,
              "eve": 21.28,
              "morn": 16.19
            },
            "pressure": 1014,
            "humidity": 36,
            "dew_point": 9.21,
            "wind_speed": 4.68,
            "wind_deg": 312,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 4.37
          },
          {
            "dt": 1607927400,
            "sunrise": 1607908623,
            "sunset": 1607946298,
            "temp": {
              "day": 22.91,
              "min": 14.7,
              "max": 25.15,
              "night": 16.43,
              "eve": 20.68,
              "morn": 15.01
            },
            "feels_like": {
              "day": 18.42,
              "night": 12.91,
              "eve": 17.32,
              "morn": 10.67
            },
            "pressure": 1016,
            "humidity": 25,
            "dew_point": 2.26,
            "wind_speed": 3.98,
            "wind_deg": 331,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 4.41
          },
          {
            "dt": 1608013800,
            "sunrise": 1607995059,
            "sunset": 1608032718,
            "temp": {
              "day": 22.2,
              "min": 14,
              "max": 22.86,
              "night": 18.61,
              "eve": 18.89,
              "morn": 14.28
            },
            "feels_like": {
              "day": 19.46,
              "night": 15.57,
              "eve": 16.06,
              "morn": 10.21
            },
            "pressure": 1017,
            "humidity": 25,
            "dew_point": 1.55,
            "wind_speed": 1.34,
            "wind_deg": 296,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "clouds": 15,
            "pop": 0,
            "uvi": 1.12
          },
          {
            "dt": 1608100200,
            "sunrise": 1608081493,
            "sunset": 1608119139,
            "temp": {
              "day": 21.47,
              "min": 16.95,
              "max": 24.58,
              "night": 16.95,
              "eve": 20.73,
              "morn": 17.24
            },
            "feels_like": {
              "day": 17.85,
              "night": 12.57,
              "eve": 17.42,
              "morn": 13.81
            },
            "pressure": 1019,
            "humidity": 23,
            "dew_point": -0.31,
            "wind_speed": 2.22,
            "wind_deg": 325,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": 81,
            "pop": 0,
            "uvi": 4.33
          },
          {
            "dt": 1608186600,
            "sunrise": 1608167927,
            "sunset": 1608205562,
            "temp": {
              "day": 22.02,
              "min": 13.16,
              "max": 23.22,
              "night": 13.16,
              "eve": 17.86,
              "morn": 13.91
            },
            "feels_like": {
              "day": 14.83,
              "night": 8.06,
              "eve": 12.68,
              "morn": 9.08
            },
            "pressure": 1018,
            "humidity": 22,
            "dew_point": -0.97,
            "wind_speed": 7.3,
            "wind_deg": 298,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 4.36
          },
          {
            "dt": 1608273000,
            "sunrise": 1608254360,
            "sunset": 1608291986,
            "temp": {
              "day": 19.62,
              "min": 10.16,
              "max": 22.06,
              "night": 13.28,
              "eve": 17.13,
              "morn": 10.16
            },
            "feels_like": {
              "day": 14.22,
              "night": 9.43,
              "eve": 13.08,
              "morn": 5.39
            },
            "pressure": 1017,
            "humidity": 24,
            "dew_point": -4.17,
            "wind_speed": 4.58,
            "wind_deg": 289,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 5
          },
          {
            "dt": 1608359400,
            "sunrise": 1608340792,
            "sunset": 1608378411,
            "temp": {
              "day": 19.6,
              "min": 10.94,
              "max": 22.61,
              "night": 13.85,
              "eve": 17.67,
              "morn": 10.94
            },
            "feels_like": {
              "day": 15.82,
              "night": 10.67,
              "eve": 14.22,
              "morn": 7.01
            },
            "pressure": 1018,
            "humidity": 24,
            "dew_point": -4.1,
            "wind_speed": 2.26,
            "wind_deg": 302,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 5
          },
          {
            "dt": 1608445800,
            "sunrise": 1608427223,
            "sunset": 1608464838,
            "temp": {
              "day": 20.59,
              "min": 11.41,
              "max": 23.45,
              "night": 14.39,
              "eve": 18.27,
              "morn": 11.41
            },
            "feels_like": {
              "day": 16.93,
              "night": 10.74,
              "eve": 14.64,
              "morn": 8.05
            },
            "pressure": 1018,
            "humidity": 23,
            "dew_point": -3.95,
            "wind_speed": 2.14,
            "wind_deg": 311,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 5
          }
        ]
      }`;

    //   weatherArea.style.display = 'block'

    //   updateWeather(JSON.parse(apiRes))
