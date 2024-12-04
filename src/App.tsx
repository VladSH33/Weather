import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchWeatherDetails } from './store/reducers/ActionCreators';

const App = () => {
  const dispatch = useAppDispatch();
  const {details} = useAppSelector(state => state.weatherDetailsReducer)

  useEffect(() => {
    dispatch(fetchWeatherDetails())
  }, [ ])

  return (
    <div className='App'>
      {JSON.stringify(details, null, 2)}
    </div>
  );
};

export default App;