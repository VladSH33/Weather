import React from 'react';
import { Wrapper, Day, Temp, Locaton} from './TodayBox.style'
import { getIcon } from '../../utils/getWeatherIcon';

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
                  {getIcon(weatherCodes[index])}
                </div>
            </Day>

            <Temp>
                {temperatures[index]}°
            </Temp>
            
            <Locaton>
                <img src={`${process.env.PUBLIC_URL}/icons/location.svg`} alt="location" />
                {city}
            </Locaton>
        </Wrapper>
    );
};

export default TodayBox;