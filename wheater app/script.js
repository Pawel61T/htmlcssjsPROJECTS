const apiKey = "95b813d3d74eb36c3d6e86986ee9443e"
const geolocationApiUrl = "https://api.openweathermap.org/geo/1.0/direct?"
const weatherApiUrl = "https://api.openweathermap.org/data/3.0/onecall?" 

//geolocation https://api.openweathermap.org/geo/1.0/direct?q=chicago&limit=1&appid=95b813d3d74eb36c3d6e86986ee9443e
//weather https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const searchInput = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
searchButton.addEventListener("click", checkWeather)


async function checkWeather(){
    //ask for location of input city
    const geolocationResponse = await fetch(geolocationApiUrl + `appid=${apiKey}&q=${searchInput.value}`)
    var data = await geolocationResponse.json();
    console.log(data[0]);
    const lat = data[0].lat
    const lon = data[0].lon
    document.querySelector(".weather h2").innerHTML = `${data[0].name}`

    const weatherResponse = await fetch(weatherApiUrl + `units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`)
    var data = await weatherResponse.json()
    console.log(data)
    document.querySelector(".weather h1").innerHTML = `${data.current.temp}°C`
    document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`
    document.querySelector(".wind").innerHTML = `${data.current.wind_speed} km/h`


}
