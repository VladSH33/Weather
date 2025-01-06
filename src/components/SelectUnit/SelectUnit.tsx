import React from 'react';
import { fetchWeatherDetails, setUnits } from '../../store/reducers/WeatherDetailsSlice';
import { useAppDispatch } from '../../hooks/redux';
import { DEFAULT_CITY_KALINIGRAD_LON, DEFAULT_CITY_KALINIGRAD_LAT } from '../../constants/index'
import { SwitchUnit, Unit, Slash } from './SelectUnit.style';
import Error from '../Error/Error'

type SelectUnitProps = {
    hourly_units?: string;
    details?: { longitude: number; latitude: number } | null;
}

const SelectUnit: React.FC<SelectUnitProps> = ({hourly_units, details}) => {
    const dispatch = useAppDispatch();

    const selectUnit = () => {
        if (hourly_units === '°C') {
          dispatch(fetchWeatherDetails({ unit: 'fahrenheit', lon: details?.longitude ?? DEFAULT_CITY_KALINIGRAD_LON, lat: details?.latitude ?? DEFAULT_CITY_KALINIGRAD_LAT }));
          dispatch(setUnits('fahrenheit'));
        } else {
          dispatch(fetchWeatherDetails({ unit: 'celsius', lon: details?.longitude ?? DEFAULT_CITY_KALINIGRAD_LON, lat: details?.latitude ?? DEFAULT_CITY_KALINIGRAD_LAT}));
          dispatch(setUnits('celsius'));
        }
    };

    return (
        <SwitchUnit onClick={selectUnit}>
            <Unit $isActive={hourly_units === '°C'}>C</Unit>
            <Slash>/</Slash>
            <Unit $isActive={hourly_units === '°F'}>F</Unit>
        </SwitchUnit>
    );
};

export default SelectUnit;