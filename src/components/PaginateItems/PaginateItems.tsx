import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './PaginateItems.scss';

export const PaginateItems = () => {
  const public_repos = useAppSelector((state) => state.user.dataUser?.public_repos) as number;
  const items = useAppSelector((state) => state.paginate.amountItems);
  const activePage = useAppSelector((state) => state.paginate.activePage);
  const start = (activePage - 1) * items + 1;
  const end = activePage * items;
  return (
    <div className='paginate-items'>
      {start}-{end > public_repos ? public_repos : end} of {public_repos} items
    </div>
  );
};
