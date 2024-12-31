import React from 'react';
import { Wrapper, Day, Temp, Locaton} from './TodayBox.style'
import Skeleton from '../Skeleton/Skeleton';

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

  type TodayBoxProps = {
    index: number;
    temperatures?: number[];
    weatherCodes?: number[];
    city: string;
    isLoading: boolean;
  }

const TodayBox: React.FC<TodayBoxProps> = ({index = 0, temperatures, weatherCodes, city, isLoading}) => {

    let now = new Date();

    if (!temperatures || !weatherCodes) {
      return <div/>
    }

    return (
        <Wrapper>
            <Day>
                <div className="day__date">
                    <div className="toDay">Today</div>
                    <div className="date">
                        {String(now).slice(0, 11)}
                    </div>
                </div>
                <div className="day__weather-icon">
                  <img src={getImageSrc(weatherCodes[index])} alt="weather-icon" />
                </div>
            </Day>

            <Temp>
                {temperatures[index]}°
            </Temp>
            
            <Locaton>
                <img src="../../icons/location.svg" alt="location" />
                {city}
            </Locaton>
        </Wrapper>
    );
};

export default TodayBox;