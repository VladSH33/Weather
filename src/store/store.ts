import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weatherDetailsReducer from './reducers/WeatherDetailsSlice'
import createSagaMiddleware from 'redux-saga';
import { weatherDetailsWatcher } from '../saga/WeatherDetailsSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    weatherDetailsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(weatherDetailsWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;