const input = document.querySelector('#inputCity');
const btnSearch = document.querySelector('#btnSearch')
const controller = new WeatherController();
const service = new WeatherService();

service.requestSP();

btnSearch.addEventListener('click', () => {
    controller.showData();
});