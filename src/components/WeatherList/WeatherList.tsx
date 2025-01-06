import React from 'react';
import { DailyData, HourlyData } from '../../types/IWeatherDetails';
import VariableCard from '../WeatherCard/WeatherCard';
import Error from '../Error/Error';

import './WeatherList.style';
import { Inner } from './WeatherList.style';

const dailyUsefullFields: Partial<Record<keyof Omit<DailyData, 'time'>, string>> = {
  sunrise: 'sunrise',
  sunset: 'sunset',
};

const hourlyUsefullFields: Partial<Record<keyof HourlyData, string>> = {
  relative_humidity_2m: 'humidity',
  apparent_temperature: 'feels_like',
  precipitation_probability: 'precipitation',
  surface_pressure: 'pressure',
  visibility: 'visibility',
  wind_speed_180m: 'wind',
};

type WeatherListProps = {
  hourly?: HourlyData;
  daily?: DailyData;
  index?: number;
}

const WeatherList: React.FC<WeatherListProps> = ({hourly, daily, index}) => {
  return (
    <Inner>
      {daily ? (
        <>
          {Object.entries(daily)
            .filter(([key]) => key !== 'time')
            .map(([key, values]) => {
              const label = dailyUsefullFields[key as keyof typeof dailyUsefullFields] ?? key;
              console.log(label)
                return (
                  <VariableCard
                    key={`${key}-${label}`}
                    label={label}
                    values={values[0]}
                  />
                );
          })}
        </>
      ) : (
      <Error>Нет данных</Error>
      )}

      {hourly ? (
        <>
            {Object.entries(hourly)
              .filter(([key]) => key !== 'time' && key !== 'temperature_2m' && key !== 'weather_code')
              .map(([key, values]) => {
                if (Array.isArray(values)) {
                  const label = hourlyUsefullFields[key as keyof typeof hourlyUsefullFields] ?? key;
                  const value = values[index ?? 0]
                  return (
                    <VariableCard
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
        <Error>Нет данных</Error>
      )}
    </Inner>
  );
};

export default WeatherList;