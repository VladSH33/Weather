import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchWeatherDetails } from '../store/reducers/WeatherDetailsSlice';

import WeatherVariableCard from './WeatherVariableCard';

const WeatherVariableList = () => {
    const dispatch = useAppDispatch();
    const {details, isLoading, error} = useAppSelector(state => state.weatherDetailsReducer)

    useEffect(() => {
        dispatch(fetchWeatherDetails())
    }, [ ])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const hourly = details?.hourly;
    const daily = details?.daily;

    return (
        <div>
            <h1>Weather Data</h1>



        {daily ? (
        <>
          {Object.entries(daily).map(([key, values]) => {
            if (Array.isArray(values)) {
                return <WeatherVariableCard key={key} label={key} values={values} />;
            }
            return null;
          })}
        </>
      ) : (
        <h2>Нет данных для отображения</h2>
      )}


        {hourly ? (
        <>
          {Object.entries(hourly).map(([key, values]) => {
            if (Array.isArray(values)) {

                const value = values[1]
                return <WeatherVariableCard key={key} label={key} values={value} />;
            }
            return null;
          })}
        </>
      ) : (
        <h2>Нет данных для отображения</h2>
      )}

        </div>
    );
};

export default WeatherVariableList;