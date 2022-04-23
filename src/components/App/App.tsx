import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.scss';

export const App = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div className='app'>
      <Header setText={setText} />
      <Main name={user} />
    </div>
  );
};
