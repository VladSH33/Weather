import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import WeatherVariableList from './components/WeatherVariableList/WeatherVariableList';
import './styles/global.scss'

const App = () => {
  return (
    <div className='app container'>
      <WeatherVariableList/>
    </div>
  );
};

export default App;