import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <Link to='' className='header__logo' />
      <Search />
    </div>
  );
};
