import './WeatherVariableCard.scss'

interface WeatherVariableCardProps {
  label: string;
  values: string;
}

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


const WeatherVariableCard: React.FC<WeatherVariableCardProps> = ({ label, values }) => {

  let formattedValues: string | number = values;

  if (label === 'sunset' || label === 'sunrise') {
    formattedValues = values.slice(11, 16);
  }

  if (label === 'visibility') {
    formattedValues = Number(values) / 1000;
  }

  if (label === 'pressure') {
    formattedValues = Math.floor(Number(values));
  }

  const imageSrc = imageMap[label]; 

  const unitParameter = unitMeasurement[label]; 

  return (
    <div className="parameterCard">
      <div className='parameterCard__title'>{label}</div>
      <div className="parameterCard__desc">
        <div>{formattedValues}{unitParameter}</div>
        <div className="parameterCard__img">
          <img src={imageSrc} alt={label}></img>
        </div>
      </div>
        
    </div>
  );
};

export default WeatherVariableCard;