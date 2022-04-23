import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import './Header.scss';

type IProps = {
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ setText }: IProps) => {
  return (
    <div className='header'>
      <Link to='' className='header__logo' />
      <Search setName={setText} />
    </div>
  );
};
