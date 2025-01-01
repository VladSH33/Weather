import React from 'react';
import { Wrapper, Direction, Title } from './VariableCard.style';

const imageMap: { [key: string]: string } = {
  'humidity': `${process.env.PUBLIC_URL}/icons/humidity.svg`,
  'feels like': `${process.env.PUBLIC_URL}/icons/feels_like.svg`,
  'precipitation': `${process.env.PUBLIC_URL}/icons/precipitation.svg`,
  'pressure': `${process.env.PUBLIC_URL}/icons/pressure.svg`,
  'visibility': `${process.env.PUBLIC_URL}/icons/visibility.svg`,
  'wind': `${process.env.PUBLIC_URL}/icons/wind.svg`,
  'sunrise': `${process.env.PUBLIC_URL}/icons/sunrise.svg`,
  'sunset': `${process.env.PUBLIC_URL}/icons/sunset.svg`,
};

const unitMeasurement: { [key: string]: string } = {
  'humidity': '%',
  'feels like': '°',
  'precipitation': '%',
  'pressure': ' hPa',
  'visibility': ' km',
  'wind': ' km/h',
  'sunrise': 'am',
  'sunset': 'pm',
};

type VariableCardProps = {
  label: string;
  values: string;
}

const VariableCard: React.FC<VariableCardProps> = ({ label, values }) => {

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

  const imageSrc = imageMap[label]; 

  const unitParameter = unitMeasurement[label]; 

  return (
    
    <Wrapper>
          <Title>{label}</Title>
          <Direction>
              <div>{formattedValues}{unitParameter}</div>
              <img src={imageSrc} alt={label}></img>
          </Direction> 
    </Wrapper>

  );
};

export default VariableCard;