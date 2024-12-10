import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import axios from "axios";
import { WeatherResponse } from '../types/IWeatherDetails';
import { weatherDetailsFetchingSuccess, weatherDetailsFetchingError, weatherDetailsFetching } from '../store/reducers/WeatherDetailsSlice';

const fetchWeatherData = async (): Promise<WeatherResponse> => {
    const response: AxiosResponse<WeatherResponse> = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=54.70821&longitude=20.54292&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,surface_pressure,visibility,wind_speed_180m&daily=sunrise,sunset&forecast_days=1');
    return response.data;
  };


function* fetchWeatherDataWorker() {
try {
    yield put(weatherDetailsFetching());
    const weatherData: WeatherResponse = yield call(fetchWeatherData);
    yield put(weatherDetailsFetchingSuccess(weatherData));
} catch (error: any) {
    yield put(weatherDetailsFetchingError(error.message));
}
}

export function* weatherDetailsWathcher() {
    yield takeEvery('weatherDetails/fetchWeatherDetails', fetchWeatherDataWorker);
}