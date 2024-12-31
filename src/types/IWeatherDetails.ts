export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: HourlyData;
  daily_units: DailyUnits;
  daily: DailyData;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  precipitation_probability: string;
  surface_pressure: string;
  visibility: string;
  wind_speed_180m: string;
  weather_code: string;
}

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  apparent_temperature: number[];
  precipitation_probability: number[];
  surface_pressure: number[];
  visibility: number[];
  wind_speed_180m: number[];
  weather_code: number[];
}

export interface DailyUnits {
  time: string;
  sunrise: string;
  sunset: string;
}

export interface DailyData {
  time: string[];
  sunrise: string[];
  sunset: string[];
}