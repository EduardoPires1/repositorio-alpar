class WeatherModel {
    static instance;
    _city = '';
    _description = '';
    _temp = 0;
    _temp_min = 0;
    _temp_max = 0;

    get city() {
        return this._city
    }
    get description() {
        return this._description
    }
    get temp() {
        return this._temp
    }
    get temp_min() {
        return this._city
    }
    get temp_max() {
        return this._temp_max
    }

    set city(value) {
        this._city = value
    }
    set description(value) {
        this._description = value
    }
    set temp(value) {
        this._temp = value
    }
    set temp_max(value) {
        this._temp_max = value
    }
    set temp_min(value) {
        this._temp_min = value
    }
}