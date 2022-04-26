import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Loader } from '../Loader/Loader';
import './Repos.scss';

export const Repos = () => {
  const status = useAppSelector((state) => state.repos.statusRepos);

  const pageRepos = () => {
    switch (status) {
      case 'loading':
        return <Loader />;
      case 'nothing':
        return 'nothing';
      case 'presence':
        return 'presence';
      default:
        return;
    }
  };

  return <div className='repos'>{pageRepos()}</div>;
};
