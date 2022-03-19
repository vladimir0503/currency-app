import React from 'react';
import { Context } from './Context';
import useCoursesState from './hooks/useCoursesState';
import CoursesList from './components/CoursesList/CoursesList';
import CurrencyInfo from './components/СurrencyInfo/CurrencyInfo';

import './App.scss';

const App = () => {

  const state = useCoursesState();

  return (
    <div className="App">
      <Context.Provider value={state}>
        <CoursesList />
        <CurrencyInfo />
      </Context.Provider>
    </div>
  );
}

export default App;