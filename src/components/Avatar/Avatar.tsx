import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './Avatar.scss';

export const Avatar = () => {
  const avatar_url = useAppSelector((state) => state.user.dataUser?.avatar_url);
  return (
    <div className='avatar'>
      <img className='avatar-img' src={avatar_url} alt='avatar' />
    </div>
  );
};
