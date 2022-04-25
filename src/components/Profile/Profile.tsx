import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './Profile.scss';

export const Profile = () => {
  const data = useAppSelector((state) => state.user.dataUser);
  function round(n: number | undefined) {
    if (!n) return '';
    return n < 1000 ? n : `${(n / 1000).toFixed(1)}k`;
  }
  return (
    <div className='profile'>
      <div className='profile__avatar'>
        <img className='profile__avatar-img' src={data?.avatar_url} alt='avatar' />
      </div>
      <div className='profile__name'>{data?.name}</div>
      <a
        className='profile__login'
        href={data ? `${data.html_url}` : ''}
        target='_blank'
        rel='noreferrer'
      >
        {data?.login}
      </a>
      <div className='profile__amount'>
        <p className='profile__amount_follower'>{`${round(data?.followers)} followers`}</p>
        <p className='profile__amount_following'>{`${round(data?.following)} following`}</p>
      </div>
    </div>
  );
};
