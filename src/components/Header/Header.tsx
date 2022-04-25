import React from 'react';
import { Search } from '../Search/Search';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <a href='' className='header__logo' />
      <Search />
    </div>
  );
};
