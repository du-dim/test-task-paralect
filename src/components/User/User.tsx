import React from 'react';
import { Profile } from '../Profile/Profile';
import { Repos } from '../Repos/Repos';
import './User.scss';

export const User = () => {
  return (
    <div className='user'>
      <Profile />
      <Repos />
    </div>
  );
};
