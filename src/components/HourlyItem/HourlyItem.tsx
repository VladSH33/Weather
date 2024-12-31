import React from 'react';
import { Wrapper, Hour, WeatherTemp } from './HourlyItem.style';

const getImageSrc = (weatherCode: number): string => {
    if ([0, 1].includes(weatherCode)) {
      return "../../icons/sun.svg";
    }
    if ([71, 73, 75, 77, 66, 67, 85, 86].includes(weatherCode)) {
      return "../../icons/snow.svg";
    }
    if ([2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
      return "../../icons/cloud.svg";
    }
    return "../../icons/e.svg";
  };


type HourlyItemProps = {
    time: string;
    temperature: number;
    weatherCode: number;
    selectTime: (time: number) => void; 
    index: number;
    now: number;
    isLoading: boolean;
  }

const HourlyItem: React.FC<HourlyItemProps> = ({ time, temperature, weatherCode, selectTime, index, now, isLoading }) => {

  const handleClick = () => {
    selectTime(index);
  };

    return (
        <Wrapper className="hourlyItem">


                  <Hour>
                      {index === now ? "Now" : time.slice(11, 16)}
                  </Hour>
                  
                  <WeatherTemp onClick={handleClick}>
                      <div className="weather-icon">
                        <img src={getImageSrc(weatherCode)} alt="weather-icon" />
                      </div>
                      <div className="temp">
                          {temperature}°
                      </div>
                  </WeatherTemp>            
        </Wrapper>
    );
};


export default HourlyItem;