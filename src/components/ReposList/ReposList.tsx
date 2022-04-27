import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Paginator } from '../Paginator/Paginator';
import { Repository } from '../Repository/Repository';
import './ReposList.scss';

export const ReposList = () => {
  const repos = useAppSelector((state) => state.user.dataUser?.public_repos) as number;
  const items = useAppSelector((state) => state.paginate.amountItems);
  const activePage = useAppSelector((state) => state.paginate.activePage);
  const start = (activePage - 1) * items;
  const end = activePage * items > repos ? repos : activePage * items;
  const data = useAppSelector((state) => state.repos.dataRepos)?.slice(start, end);
  console.log(repos);

  const list = data?.map((d) => (
    <Repository key={d.id} name={d.name} description={d.description ? d.description : ''} />
  ));

  return (
    <div className='reposlist'>
      <h1 className='reposlist__amount'>Repositories ({repos})</h1>
      <div className='reposlist__list'>{list}</div>
      <Paginator />
    </div>
  );
};
