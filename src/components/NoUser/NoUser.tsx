import React from 'react';
import './NoUser.scss';

export const NoUser = () => {
  return (
    <div className='nouser'>
      <div className='nouser__icon'>
        <img className='nouser__icon_img' src='./assets/user.svg' alt='user' />
      </div>
      <div className='nouser__text'>User not found</div>
    </div>
  );
};
