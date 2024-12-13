import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchWeatherDetails } from '../../store/reducers/WeatherDetailsSlice';
import { DailyData, HourlyData } from '../../types/IWeatherDetails'
import WeatherVariableCard from '../WeatherVariableCard/WeatherVariableCard';

import './WeatherVariableList.scss'


const usefullFields = {
  dailyUsefullFields: {
    sunrise: 'sunrise',
    sunset: 'sunset',
  } as { [key in keyof DailyData]: string },

  // Маппинг для HourlyData
  HourlyUsefullFields: {
    relative_humidity_2m: 'humidity',
    apparent_temperature: 'feels like',
    precipitation_probability: 'precipitation',
    surface_pressure: 'pressure',
    visibility: 'visibility',
    wind_speed_180m: 'wind',
  } as { [key in keyof HourlyData]: string },
};

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
        <div className='parameters'>
            <h1>Weather Details</h1>

            <div className="parameters__inner">

              {daily ? (
                <>
                  {Object.entries(daily)
                    .filter(([key]) => key !== 'time')
                    .map(([key, values]) => {
                        const label = usefullFields.dailyUsefullFields[key as keyof DailyData] || key;
                        
                        return (
                          <WeatherVariableCard
                            key={`${key}-${label}`}
                            label={label}
                            values={values[0]}
                          />
                        );
                    return null;
                  })}
                </>
              ) : (
              <h2>Нет данных для отображения</h2>
              )}


              {hourly ? (
                <>
                    {Object.entries(hourly)
                      .filter(([key]) => key !== 'time' && key !== 'temperature_2m')
                      .map(([key, values]) => {
                        if (Array.isArray(values)) {
                          const label = usefullFields.HourlyUsefullFields[key as keyof HourlyData] || key;
                          const value = values[0]
                          return (
                            <WeatherVariableCard
                              key={`${key}-${label}`}
                              label={label}
                              values={value}
                            />
                          );
                        }
                        return null;
                      })}
                  </>
              ) : (
                <h2>Нет данных для отображения</h2>
              )}

            </div>


        </div>
    );
};

export default WeatherVariableList;