import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { WeatherResponse } from '../types/IWeatherDetails'; 
import { CoordinatesResponse } from '../types/ICoordinates';
import { 
    weatherDetailsFetchingSuccess,
    weatherDetailsFetchingError,
    weatherDetailsFetching,
    fetchWeatherDetails,
    fetchCoordinates,
    coordinatesStartFetchingSuccess,
    coordinatesStartFetchingError
} from '../store/reducers/WeatherDetailsSlice';

type FetchWeatherDetailsPayload = {
    unit: string;
    lon: number;
    lat: number;
};

type FetchCoordinatesPayload = {
    city: string;
};

const simulateUnauthorizedError = (): Promise<never> => {
    return new Promise((_, reject) => {
      const error = new Error('Unauthorized');
      (error as any).response = { status: 401 };
      reject(error);
    });
  };

const fetchWeatherData = async (unit: string, lon: number, lat:number): Promise<WeatherResponse> => {
    const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,surface_pressure,visibility,wind_speed_180m,weather_code&daily=sunrise,sunset&forecast_days=1`;
    const params = unit === 'celsius' 
        ? ''
        : '&temperature_unit=fahrenheit';

    const response: AxiosResponse<WeatherResponse> = await axios.get(`${baseURL}${params}`);
    return response.data;

    // return simulateUnauthorizedError();
};

const emulateTokenRefresh = async (): Promise<string> => {
    console.log('Эмуляция обновления токенов...');
    return new Promise((resolve) => setTimeout(() => resolve('Токен обновлён'), 2000));
};

function* handleUnauthorizedError<T>(fetchFn: (...args: any[]) => Promise<T>, ...args: any[]): Generator<any, T, any> {
    try {
        return yield call(fetchFn, ...args);
    } catch (error: any) {
        if (error.response?.status === 401) {
            console.log('Ошибка 401, обновляем токены...');
            yield call(emulateTokenRefresh);


            return yield call(fetchFn, ...args);
        }

        throw error;
    }
}

const fetchCoordinatesData = async (city: string): Promise<CoordinatesResponse> => {
    const response: AxiosResponse<CoordinatesResponse> = await axios.get(`https://autocomplete.travelpayouts.com/places2?term=${city}&locale=ru&types[]=city`);
    const limitedData = response.data.slice(0, 5);
    return limitedData;
  };


  function* fetchWeatherDataWorker(action: ReturnType<typeof fetchWeatherDetails>) {
    try {
        yield put(weatherDetailsFetching());

        const weatherData: WeatherResponse = yield call(handleUnauthorizedError, fetchWeatherData, action.payload.unit, action.payload.lon, action.payload.lat);

        yield put(weatherDetailsFetchingSuccess(weatherData));

    } catch (error: any) {
        yield put(weatherDetailsFetchingError(error.message));
    }
}


function* fetchCoordinatesWorker(action: ReturnType<typeof fetchCoordinates>) {
    try {
        const coordinatesData: CoordinatesResponse = yield call(fetchCoordinatesData, action.payload.city);
        yield put(coordinatesStartFetchingSuccess(coordinatesData));
    } catch (error: any) {
        yield put(coordinatesStartFetchingError(error.message));
    }
  }


export function* weatherDetailsWatcher() {
    yield takeEvery(fetchWeatherDetails.type, fetchWeatherDataWorker);
    yield takeEvery(fetchCoordinates.type, fetchCoordinatesWorker);
}