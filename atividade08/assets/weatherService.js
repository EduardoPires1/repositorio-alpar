class WeatherService {
  async request(param) {
      try {
          const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e035974b260aa37607ca4427d18dab85&units=metric`);
          const response = await data.json();
          const dados = new WeatherModel();
          const view = new WeatherView();
          view.showWeather(response);
          console.log(response);
          return dados;
      } catch (error) {
          return error.message;
      }
  }

  async requestSP() {
      try {
          const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=sao%20paulo&appid=e035974b260aa37607ca4427d18dab85&units=metric`);
          const response = await data.json();
          const view = new WeatherView();
          view.showSaoPaulo(response);
          console.log(response);
          return dados;
      }   catch (error) {
          return error.message;
      }
  }
}