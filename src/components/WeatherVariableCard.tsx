interface WeatherVariableCardProps {
  label: string;
  values: number[];
}

const WeatherVariableCard: React.FC<WeatherVariableCardProps> = ({ label, values }) => {
  return (
    <div>
      <h3>{label}</h3>
      <ul>
          <li>
            {values}
          </li>
      </ul>
    </div>
  );
};

export default WeatherVariableCard;