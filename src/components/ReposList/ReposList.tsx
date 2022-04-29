import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Paginator } from '../Paginator/Paginator';
import { Repository } from '../Repository/Repository';
import { SumRepos } from '../SumRepos/SumRepos';
import './ReposList.scss';

export const ReposList = () => {
  const public_repos = useAppSelector((state) => state.user.dataUser?.public_repos) as number;
  const items = useAppSelector((state) => state.paginate.amountItems);
  const data = useAppSelector((state) => state.repos.dataRepos);
  const list = data?.map((d) => (
    <Repository key={d.id} name={d.name} description={d.description ? d.description : ''} />
  ));

  return (
    <div className='reposlist'>
      <SumRepos />
      <div className='reposlist__list'>{list}</div>
      {public_repos > items ? <Paginator /> : <></>}
    </div>
  );
};
