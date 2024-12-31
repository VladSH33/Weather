import React from 'react';
import { Wrapper, Direction, Title } from './VariableCard.style';


const imageMap: { [key: string]: string } = {
  'humidity': "../../icons/humidity.svg",
  'feels like': '../../icons/feels_like.svg',
  'precipitation': '../../icons/precipitation.svg',
  'pressure': '../../icons/pressure.svg',
  'visibility': '../../icons/visibility.svg',
  'wind': '../../icons/wind.svg',
  'sunrise': '../../icons/sunrise.svg',
  'sunset': '../../icons/sunset.svg',
};

const unitMeasurement: { [key: string]: string } = {
  'humidity': '%',
  'feels like': '°',
  'precipitation': '%',
  'pressure': 'hPa',
  'visibility': 'km',
  'wind': 'km/h',
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