const tempo = document.querySelector('#weather');
const saoPaulo = document.querySelector('.saoPaulo');

class WeatherView {
    showWeather(weatherData) {
        tempo.innerHTML = `
            <div class="content">
            <h1>${weatherData.name}</h1>
            <h2>${weatherData.main.temp}°C</h2>
            <div class="minmax">
                <p>Máx: ${weatherData.main.temp_max}°</p>
                <p>Mín: ${weatherData.main.temp_min}°</p>
            </div>
            <p>💧: ${weatherData.main.humidity}%</p>
            <p>tempo: ${weatherData.weather[0].description}</p>
            <p>💨: ${weatherData.wind.speed}km/h</p>
            </div>
        `
    }

    showSaoPaulo(weatherData) {
        saoPaulo.innerHTML = `
            <div class="content">
            <h1>${weatherData.name}</h1>
            <h2>${weatherData.main.temp}°C</h2>
            <div class="minmax">
                <p>Máx: ${weatherData.main.temp_max}°</p>
                <p>Mín: ${weatherData.main.temp_min}°</p>
            </div>
            <p>💧: ${weatherData.main.humidity}%</p>
            <p>tempo: ${weatherData.weather[0].description}</p>
            <p>💨: ${weatherData.wind.speed}km/h</p>
            </div>
        `
    }
}