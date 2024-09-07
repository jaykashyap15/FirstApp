const apiKey = "8b718b4d2935b7625fe3a17cf8ced283";
// Your provided OpenWeatherMap API Key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDetails = document.getElementById("WeatherDeatils");
  if (city === "") {
    weatherDetails.innerHTML = "<p>Please enter a city name</p>";
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        weatherDetails.innerHTML = "<p>city not found please try again</p>";
      } else {
         console.log("data is here",data)
        weatherDetails.innerHTML = `<h2>${data.name},${data.sys.country}</h2>
              <p>Temparature:${data.main.temp}</p> 
             `;
            
      }
    })

    .catch((error) => {
      weatherDetails.innerHTML = "<p> error fetching darta</p>";
    });
}


