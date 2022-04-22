import React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.scss';

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
};
