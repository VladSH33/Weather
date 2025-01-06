import React, { useEffect, useState  } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useSystemTheme } from '../../hooks/useSystemTheme';
import { useTheme } from '../../hooks/useTheme';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import VariableList from '../../components/WeatherList/WeatherList';
import HourlyList from '../../components/HourlyList/HourlyList';
import TodayWeather from '../../components/TodayBox/TodayBox';
import SearchCityInput from '../../components/SearchCityInput/SearchCityInput';
import MySelect from '../../components/select/SelectCity';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import Error from '../../components/Error/Error';
import { DEFAULT_CITY_KALINIGRAD_LON, DEFAULT_CITY_KALINIGRAD_LAT, DEFAULT_NAME_CITY_KALINIGRAD } from '../../constants/index'

import Skeleton from '../../components/Skeleton/Skeleton';

import { fetchWeatherDetails, fetchCoordinates, setSelectedTime, selectCity } from '../../store/reducers/WeatherDetailsSlice';

import { GlobalStyles } from '../../styles/global'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/themes';

import { Inner } from '../../components/WeatherList/WeatherList.style';
import { Wrapper } from '../../components/HourlyList/HourlyList.style';
import { Container, Header, WeatherDashboard } from './App.style';
import SelectUnit from '../../components/SelectUnit/SelectUnit';

const App: React.FC = () => {
  const themeSystem = useSystemTheme();
  const { theme, toggleTheme } = useTheme(themeSystem);

  const dispatch = useAppDispatch();

  const { details, isLoading, error, selectedTime, coordinates, isCity, selectedUnity } = useAppSelector(state => state.weatherDetailsReducer);

  const [inputSearchCityValue, setInputSearchCityValue] = useState('');
  const debouncedSearchCityValue = useDebouncedValue(inputSearchCityValue, 800);
  const [showSelectCity, setShowSelectCity] = useState(false);

  useOutsideClick(showSelectCity, () => setShowSelectCity(false));

  const hourly_units = details?.hourly_units.apparent_temperature;
  const hourly = details?.hourly;
  const daily = details?.daily;
  const times = hourly?.time;
  const temperatures = hourly?.temperature_2m;
  const weatherCodes = hourly?.weather_code;

  useEffect(() => {
    dispatch(fetchWeatherDetails({ unit: selectedUnity, lon: DEFAULT_CITY_KALINIGRAD_LON, lat: DEFAULT_CITY_KALINIGRAD_LAT }));
    dispatch(selectCity(DEFAULT_NAME_CITY_KALINIGRAD));
  }, [ ]);

  useEffect(() => {
    if (debouncedSearchCityValue) {
      dispatch(fetchCoordinates({ city: debouncedSearchCityValue }));
      setShowSelectCity(true);
    }
  }, [debouncedSearchCityValue, dispatch]);

  const handleInputChange = (value: string) => {
    setInputSearchCityValue(value);
    if (value === '') {
      setShowSelectCity(false);
    }
  };

  const selectTimeWeather = (index: number) => {
    dispatch(setSelectedTime(index));
  };

  const handleOptionSelect = (coordinat: {lon: number; lat: number}, city: string) => {
    dispatch(fetchWeatherDetails({ unit: 'celsius', lon: coordinat.lon, lat: coordinat.lat }));
    dispatch(selectCity(city));
    setShowSelectCity(false);
    setInputSearchCityValue('');
  }

  const date = new Date();

  if (error) {
    return <Error>{error}</Error>;
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
          <Container>
            <Header>
                <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>
                <div className="searchCity">
                  <SearchCityInput onSubmit={handleInputChange} value={inputSearchCityValue}/>
                  {showSelectCity && coordinates && 
                  (<MySelect options={coordinates} onOptionSelect={handleOptionSelect}/>)}
                </div>

                <SelectUnit hourly_units={hourly_units} details={details}/>
            </Header>

            <WeatherDashboard>
              {isLoading ?
              (
                <Skeleton width="18rem" height="18rem" borderRadius="8px"/>
              ) : (
                <TodayWeather  index={selectedTime ?? date.getHours()} temperatures={temperatures} weatherCodes={weatherCodes} city={isCity} isLoading={isLoading}/>
              )}
            
              {isLoading ? 
                (
                  <Wrapper>
                    <Skeleton width="7rem" height="9rem" borderRadius="40px" quantity={8}/>
                  </Wrapper>
                ) : (
                  <HourlyList times={times} temperatures={temperatures} weatherCodes={weatherCodes} selectTimeWeather={selectTimeWeather} now={date.getHours()} isLoading={isLoading}/>
              )}
            </WeatherDashboard>

            <div className="WeatherParameters">
                <h1>Weather Details</h1>
                {isLoading ? 
                  (<Inner>
                      <Skeleton width="22rem" height="12rem" borderRadius="4px" quantity={8}/>
                  </Inner>
                  ) : (
                    <VariableList hourly={hourly} daily={daily} index={selectedTime ?? date.getHours()}/>  
                )}
            </div>
          </Container>        
    </ThemeProvider>
  );
};

export default App;