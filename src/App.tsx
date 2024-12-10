import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import WeatherVariableList from './components/WeatherVariableList';

const App = () => {
  return (
    <div className='App'>
      <WeatherVariableList/>
    </div>
  );
};

export default App;