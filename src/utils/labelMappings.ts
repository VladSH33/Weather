import { DailyData, HourlyData } from '../types/IWeatherDetails';

// Строгая типизация labelMappings
export const labelMappings = {
  daily: {
    sunrise: 'Sunrise',
    sunset: 'Sunset',
  },
  hourly: {
    relative_humidity_2m: 'Humidity',
    apparent_temperature: 'Feels Like',
    precipitation_probability: 'Precipitation',
    surface_pressure: 'Pressure',
    visibility: 'Visibility',
    wind_speed_180m: 'Wind',
  },
} as const;

// Типизация ключей
type LabelMappingType = typeof labelMappings;
type DailyKeys = keyof LabelMappingType['daily'];
type HourlyKeys = keyof LabelMappingType['hourly'];

// Обновленная функция getLabel
export const getLabel = (field: string, type: 'daily' | 'hourly'): string => {
  if (type === 'daily' && field in labelMappings.daily) {
    return labelMappings.daily[field as DailyKeys];
  }
  if (type === 'hourly' && field in labelMappings.hourly) {
    return labelMappings.hourly[field as HourlyKeys];
  }
  return field; // Возвращаем оригинальное значение, если ключ не найден
};