import React, { useEffect, useState  } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useSystemTheme } from '../../hooks/useSystemTheme';

import VariableList from '../../components/VariableList/VariableList';
import HourlyList from '../../components/HourlyList/HourlyList';
import TodayWeather from '../../components/TodayBox/TodayBox';
import InputWithButton from '../../components/MyInput/MyInput';
import MySelect from '../../components/select/MySelect';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import Error from '../../components/Error/Error';

import Skeleton from '../../components/Skeleton/Skeleton';


import { fetchWeatherDetails, fetchCoordinates } from '../../store/reducers/WeatherDetailsSlice';
import { setSelectedTime, selectCity, setUnits  } from '../../store/reducers/WeatherDetailsSlice';

import { GlobalStyles } from '../../styles/global'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/themes';

import { Inner } from '../../components/VariableList/VariableList.style';
import { Wrapper } from '../../components/HourlyList/HourlyList.style';
import { Button, Unit, Slash, Container, Header, FirstSection } from './App.style';



const App: React.FC = () => {

  const themeSystem = useSystemTheme();
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? themeSystem);
  localStorage.setItem('theme', theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

    const themeLS = theme === 'light' ? 'dark' : 'light'

    localStorage.setItem('theme', themeLS);
  };

  const dispatch = useAppDispatch();
  
  const { details, isLoading, error, selectedTime, coordinates, isCity, selectedUnity } = useAppSelector(state => state.weatherDetailsReducer);

  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [showSelect, setShowSelect] = useState(false);

  const hourly_units = details?.hourly_units.apparent_temperature;
  const hourly = details?.hourly;
  const daily = details?.daily;
  const times = hourly?.time;
  const temperatures = hourly?.temperature_2m;
  const weatherCodes = hourly?.weather_code;

  const [isRendered, setIsRendered] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchWeatherDetails({ unit: selectedUnity, lon: 20.498322, lat: 54.701485 }));
    dispatch(selectCity('Калининград'));

    const timer = window.setTimeout(() => {
      setIsRendered(true);
    }, 3000);

  return () => window.clearTimeout(timer);
  }, [ ]);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setTheme(themeSystem);
    }
  }, [themeSystem]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);

    if (inputValue == '') {
      setShowSelect(false)
    } else {
      setShowSelect(true);
    }

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchCoordinates({ city: debouncedValue }));
      setShowSelect(true);
    }
  }, [debouncedValue, dispatch]);

  const selectUnit = () => {
    if (hourly_units === '°C') {
      dispatch(fetchWeatherDetails({ unit: 'fahrenheit', lon: details?.longitude ?? 20.498322, lat: details?.latitude ?? 54.701485 }));
      dispatch(setUnits('fahrenheit'));
    } else {
      dispatch(fetchWeatherDetails({ unit: 'celsius', lon: details?.longitude ?? 20.498322, lat: details?.latitude ?? 54.701485}));
      dispatch(setUnits('celsius'));
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const selectTime = (index: number) => {
    dispatch(setSelectedTime(index));
  };

  const handleOptionSelect = (coordinat: {lon: number; lat: number}, city: string) => {
    dispatch(fetchWeatherDetails({ unit: 'celsius', lon: coordinat.lon, lat: coordinat.lat }));
    dispatch(selectCity(city));
    setShowSelect(false);
    setInputValue('');
  }

  const handleOutsideClick = () => {
    setShowSelect(false);
  };

  useEffect(() => {
    if (showSelect) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showSelect]);


  const date = new Date();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />


        {!error || !isRendered ? 
                    (
          <Container>
            <Header>
                <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>

                <div className="searchCity">
                  <InputWithButton onSubmit={handleInputChange} value={inputValue}/>
                  {showSelect && coordinates && 
                  (<MySelect options={coordinates} onOptionSelect={handleOptionSelect}/>)}
                </div>

                <Button onClick={selectUnit}>
                  <Unit $isActive={hourly_units === '°C'}>C</Unit>
                  <Slash>/</Slash>
                  <Unit $isActive={hourly_units === '°F'}>F</Unit>
                </Button>
            </Header>

            <FirstSection>
                {isLoading || !isRendered  ?
                (
                  <Skeleton width="18rem" height="18rem" borderRadius="8px"/>
                ) : (
                  <TodayWeather  index={selectedTime ?? date.getHours()} temperatures={temperatures} weatherCodes={weatherCodes} city={isCity} isLoading={isLoading}/>
                )}
              
              {isLoading || !isRendered ? 
                (
                  <Wrapper>
                    <Skeleton width="7rem" height="9rem" borderRadius="40px" quantity={8}/>
                  </Wrapper>

                ) : (
                  <HourlyList times={times} temperatures={temperatures} weatherCodes={weatherCodes} selectTime={selectTime} now={date.getHours()} isLoading={isLoading}/>
                )}
            </FirstSection>

            <div className="second-section">

                <h1>Weather Details</h1>

                {isLoading || !isRendered ? 
                    (<Inner>
                        <Skeleton width="22rem" height="12rem" borderRadius="4px" quantity={8}/>
                    </Inner>
                      
                    ) : (
                      <VariableList hourly={hourly} daily={daily} index={selectedTime ?? date.getHours()}/>  
                    )}
        </div>
          </Container>
                    ) : (
                      <Error error={error}/>
                    )}
        
    </ThemeProvider>
  );
};

export default App;