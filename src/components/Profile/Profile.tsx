import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import './Profile.scss';

export const Profile = () => {
  return (
    <div className='profile'>
      <Avatar />
      <ProfileInfo />
    </div>
  );
};
