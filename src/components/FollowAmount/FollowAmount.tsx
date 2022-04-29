import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './FollowAmount.scss';

export const FollowAmount = () => {
  const data = useAppSelector((state) => state.user.dataUser);
  function round(n: number | undefined) {
    if (!n) return '';
    return n < 1000 ? n : `${(n / 1000).toFixed(1)}k`;
  }

  return (
    <div className='follow-amount'>
      <p className='follow-amount__follower'>{`${round(data?.followers)} followers`}</p>
      <p className='follow-amount__following'>{`${round(data?.following)} following`}</p>
    </div>
  );
};
