import { IWeatherDetails } from "../../models/IWeatherDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherDetailsState {
    details: IWeatherDetails[];
    isLoading: boolean;
    error: string;
}

const initialState: WeatherDetailsState = {
    details: [],
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

        weatherDetailsFetchingSuccess(state, action: PayloadAction<IWeatherDetails[]>) {
            state.isLoading = false;
            state.error = '';
            state.details = action.payload
        },

        weatherDetailsFetchingError(state, action) {
            state.isLoading = false;
            function getErrorMessage(error: unknown) {
                if (error instanceof Error) return error.message
                return String(error)
            }
        }
    }
})

export default weatherDetailsSlice.reducer;