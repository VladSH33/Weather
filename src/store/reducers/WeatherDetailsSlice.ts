import { WeatherResponse } from "../../types/IWeatherDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAction } from '@reduxjs/toolkit';
interface WeatherDetailsState {
    details: WeatherResponse | null;
    isLoading: boolean;
    error: string;
}

const initialState: WeatherDetailsState = {
    details: null,
    isLoading: false,
    error: ''
}

export const weatherDetailsSlice = createSlice ({
    name: 'weatherDetails',
    initialState,
    reducers: {
        weatherDetailsFetching(state) {
            state.isLoading = true;
        },

        weatherDetailsFetchingSuccess(state, action: PayloadAction<WeatherResponse>) {
            state.isLoading = false;
            state.error = '';
            state.details = action.payload;
        },

        weatherDetailsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const { weatherDetailsFetching, weatherDetailsFetchingSuccess, weatherDetailsFetchingError } = weatherDetailsSlice.actions;
export default weatherDetailsSlice.reducer;

export const fetchWeatherDetails = createAction('weatherDetails/fetchWeatherDetails');