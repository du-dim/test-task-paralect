import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { IPropsRepos } from '../../types';
import './Repository.scss';

export const Repository = (props: IPropsRepos) => {
  const data = useAppSelector((state) => state.user.dataUser);
  return (
    <div className='repository'>
      <a
        className='repository__name'
        href={`${data?.html_url}/${props?.name}`}
        target='_blank'
        rel='noreferrer'
      >
        {props.name}
      </a>
      <p className='repository__description'>{props?.description}</p>
    </div>
  );
};
