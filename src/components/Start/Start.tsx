import React from 'react';
import './Start.scss';

export const Start = () => {
  return (
    <div className='start'>
      <div className='start__icon'>
        <img className='start__icon_img' src='./assets/search.svg' alt='search' />
      </div>
      <div className='start__text'>Start with searching a GitHub user</div>
    </div>
  );
};
