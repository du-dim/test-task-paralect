import React from 'react';
import { IPropsRepos } from '../../types';
import './Repository.scss';

export const Repository = (props: IPropsRepos) => {
  return (
    <div className='repository'>
      <h2 className='repository__name'>{props.name}</h2>
      <p className='repository__description'>{props?.description}</p>
    </div>
  );
};
