import React from 'react';
import { Profile } from '../Profile/Profile';
import { ReposPage } from '../ReposPage/ReposPage';
import './User.scss';

export const User = () => {
  return (
    <div className='user'>
      <Profile />
      <ReposPage />
    </div>
  );
};
