import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Loader } from '../Loader/Loader';
import { NoRepos } from '../NoRepos/NoRepos';
import { ReposList } from '../ReposList/ReposList';
import './ReposPage.scss';

export const ReposPage = () => {
  const status = useAppSelector((state) => state.repos.statusRepos);

  const pageRepos = () => {
    switch (status) {
      case 'loading':
        return <Loader />;
      case 'nothing':
        return <NoRepos />;
      case 'presence':
        return <ReposList />;
      default:
        return;
    }
  };

  return <div className='repospage'>{pageRepos()}</div>;
};
