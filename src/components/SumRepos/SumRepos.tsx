import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './SumRepos.scss';

export const SumRepos = () => {
  const public_repos = useAppSelector((state) => state.user.dataUser?.public_repos) as number;
  return <h1 className='sum-repos'>Repositories ({public_repos})</h1>;
};
