import React from 'react';
import { DailyData, HourlyData } from '../../types/IWeatherDetails'
import VariableCard from '../VariableCard/VariableCard';

import './VariableList.style'
import { Inner } from './VariableList.style';


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

type VariableListProps = {
  hourly?: HourlyData;
  daily?: DailyData;
  index?: number;
}

const VariableList: React.FC<VariableListProps> = ({hourly, daily, index}) => {

    return (
            <Inner>

              {daily ? (
                <>
                  {Object.entries(daily)
                    .filter(([key]) => key !== 'time')
                    .map(([key, values]) => {
                        const label = usefullFields.dailyUsefullFields[key as keyof DailyData] || key;
                        return (
                          <VariableCard
                            key={`${key}-${label}`}
                            label={label}
                            values={values[0]}
                          />
                        );
                    return null;
                  })}
                </>
              ) : (
              <></>
              )}

              {hourly ? (
                <>
                    {Object.entries(hourly)
                      .filter(([key]) => key !== 'time' && key !== 'temperature_2m' && key !== 'weather_code')
                      .map(([key, values]) => {
                        if (Array.isArray(values)) {
                          const label = usefullFields.HourlyUsefullFields[key as keyof HourlyData] || key;
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
                <></>
              )}

            </Inner>
    );
};

export default VariableList;