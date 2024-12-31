import { WeatherResponse } from "../../types/IWeatherDetails";
import { CoordinatesResponse } from "../../types/ICoordinates";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAction } from '@reduxjs/toolkit';
interface WeatherDetailsState {
    details: WeatherResponse | null;
    isLoading: boolean;
    error: string;


    selectedUnity: string;
    selectedTime: number | null;
    isCity: string,

    coordinates: CoordinatesResponse | null;
    isCoordinatesLoading: boolean;
    coordinatesError: string;
}

const initialState: WeatherDetailsState = {
    details: null,
    isLoading: false,
    error: '',
    selectedUnity: 'celsius',
    selectedTime: null,
    isCity: '',
    coordinates: null,
    isCoordinatesLoading: false,
    coordinatesError: '',
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
        },


        setUnits(state, action: PayloadAction<string> ) {
            state.selectedUnity = action.payload;
        },

        setSelectedTime(state, action: PayloadAction<number>) {
            state.selectedTime = action.payload;
        },

        selectCity(state, action: PayloadAction<string>) {
            state.isCity = action.payload;
        },


        coordinatesStartFetching(state) {
            state.isCoordinatesLoading = true;
        },
        coordinatesStartFetchingSuccess(state, action: PayloadAction<CoordinatesResponse>) {
            state.isCoordinatesLoading = false;
            state.coordinates = action.payload;
        },
        coordinatesStartFetchingError(state, action: PayloadAction<string>) {
            state.isCoordinatesLoading = false;
            state.coordinatesError = action.payload;
        },
    }
})

export const { 
    weatherDetailsFetching, weatherDetailsFetchingSuccess, weatherDetailsFetchingError, 
    setSelectedTime, 
    coordinatesStartFetching, coordinatesStartFetchingSuccess, coordinatesStartFetchingError, 
    selectCity,
    setUnits
} = weatherDetailsSlice.actions;
export default weatherDetailsSlice.reducer;

export const fetchWeatherDetails = createAction<{ unit: string, lon:number, lat:number}>('weatherDetails/fetchWeatherDetails');
export const fetchCoordinates = createAction<{ city: string }>('weatherDetails/fetchCoordinates');