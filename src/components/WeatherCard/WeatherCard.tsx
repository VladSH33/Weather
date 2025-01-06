import React from 'react';
import { Wrapper, Direction, Title } from './WeatherCard.style';
import Icon from '../Icon/Icon'

const unitMeasurement: Record<string, string> = {
  'humidity': '%',
  'feels_like': '°',
  'precipitation': '%',
  'pressure': ' hPa',
  'visibility': ' km',
  'wind': ' km/h',
  'sunrise': 'am',
  'sunset': 'pm',
};

type WeatherCardProps = {
  label: string;
  values: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ label, values }) => {
  let formattedValues: string | number = values;
  switch (label) {
    case 'sunset':
    case 'sunrise':
      formattedValues = values.slice(11, 16);
      break;
  
    case 'visibility':
      formattedValues = Number(values) / 1000;
      break;
  
    case 'pressure':
      formattedValues = Math.floor(Number(values));
      break;
  
    default:
      formattedValues = values;
      break;
  }
  const unitParameter = unitMeasurement[label]; 

  return (
    <Wrapper>
          <Title>{label}</Title>
          <Direction>
              <div>{formattedValues}{unitParameter}</div>
              <Icon nameIcon={label}></Icon>
          </Direction> 
    </Wrapper>
  );
};

export default WeatherCard;