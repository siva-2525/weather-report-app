const apikey = "9474d194ad11d1dff849e565211ad347";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if(response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " kp/h";

            switch(data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "https://i.ibb.co/0fDnSXc/clouds.png";
                    break;
                case "Clear":
                    weatherIcon.src = "https://i.ibb.co/tP1b9z4/clear.png";
                    break;
                case "Drizzle":
                    weatherIcon.src = "https://i.ibb.co/hCmr14y/drizzle.png";
                    break;
                case "Mist":
                    weatherIcon.src = "https://i.ibb.co/XW48BQ0/mist.png" ;
                    break;
                case "Rain":
                    weatherIcon.src = "https://i.ibb.co/RvXdt7z/rain.png";
                    break;
                default:
                    weatherIcon.src = "default.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });