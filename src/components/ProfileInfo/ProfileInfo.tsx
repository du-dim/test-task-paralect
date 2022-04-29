import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { FollowAmount } from '../FollowAmount/FollowAmount';
import './ProfileInfo.scss';

export const ProfileInfo = () => {
  const data = useAppSelector((state) => state.user.dataUser);

  return (
    <div className='profile-info'>
      <div className='profile-info__name'>{data?.name}</div>
      <a
        className='profile-info__login'
        href={data ? `${data.html_url}` : ''}
        target='_blank'
        rel='noreferrer'
      >
        {data?.login}
      </a>
      <FollowAmount />
    </div>
  );
};
