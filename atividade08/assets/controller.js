const inputCity = document.querySelector('#inputCity')

class WeatherController {
    static instance
    data
    view
    service

    constructor() {
        this.data = new WeatherModel();
        this.view = new WeatherView();
        this.service = new WeatherService();
    }

    async showData() {
        const dados = await this.service.request(inputCity.value);
        return dados;
    }

    observers = []
    inscrever(value) {
        this.observers.push(value)
    }

    executar() {
        this.observers.forEach(obs => obs(this.data))
    }
}