import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Repository } from '../Repository/Repository';
import './ReposList.scss';

export const ReposList = () => {
  const data = useAppSelector((state) => state.repos.dataRepos);
  const list = data?.map((d) => (
    <Repository key={d.id} name={d.name} description={d.description ? d.description : ''} />
  ));

  return (
    <div className='reposlist'>
      <h1 className='reposlist__amount'>Repositories ({data?.length})</h1>
      <div className='reposlist__list'>{list}</div>
    </div>
  );
};
