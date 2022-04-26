import React from 'react';
import './NoRepos.scss';

export const NoRepos = () => {
  return (
    <div className='norepos'>
      <div className='norepos__icon'>
        <img className='norepos__icon_img' src='./assets/rep.svg' alt='repos' />
      </div>
      <div className='norepos__text'>Repository list is empty</div>
    </div>
  );
};
