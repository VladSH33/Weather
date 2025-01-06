import React from 'react';
import { Wrapper, Hour, WeatherTemp } from './HourlyItem.style';
import { getIcon } from '../../utils/getWeatherIcon';

type HourlyItemProps = {
  time: string;
  temperature: number;
  weatherCode: number;
  selectTimeWeather: (time: number) => void; 
  index: number;
  now: number;
  isLoading: boolean;
}

const HourlyItem: React.FC<HourlyItemProps> = ({ time, temperature, weatherCode, selectTimeWeather, index, now }) => {
  const handleClick = () => {
    selectTimeWeather(index);
  };

  return (
      <Wrapper>
          <Hour>
              {index === now ? "Now" : time.slice(11, 16)}
          </Hour>

          <WeatherTemp onClick={handleClick}>
              <div className="weather-icon">
                {getIcon(weatherCode)}
              </div>
              <div className="temp">
                  {temperature}°
              </div>
          </WeatherTemp>            
      </Wrapper>
  );
};

export default HourlyItem;