import axios from "axios";
import { AppDispatch } from "../store";
import { IWeatherDetails } from "../../models/IWeatherDetails";
import { weatherDetailsSlice } from "./WeatherDetailsSlice"

export const fetchWeatherDetails = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(weatherDetailsSlice.actions.weatherDetailsFetching())
        const response = await axios.get<IWeatherDetails[]>('https://api.open-meteo.com/v1/forecast?latitude=54.7065&longitude=20.511&daily=sunrise,sunset&forecast_days=1')
        dispatch(weatherDetailsSlice.actions.weatherDetailsFetchingSuccess(response.data))
    } catch (e) {
        dispatch(weatherDetailsSlice.actions.weatherDetailsFetchingError((e as Error).message))
    }
}