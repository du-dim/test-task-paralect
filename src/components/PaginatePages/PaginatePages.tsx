import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { active } from '../../redux/reducer/paginateSlice';
import { reposFetch } from '../../redux/thunk/fetchRepos';
import './PaginatePages.scss';

export const PaginatePages = () => {
  const dispatch = useDispatch();
  const repos_url = useAppSelector((state) => state.user.dataUser?.repos_url) as string;
  const items = useAppSelector((state) => state.paginate.amountItems);
  const activePage = useAppSelector((state) => state.paginate.activePage);
  const amountPages = useAppSelector((state) => state.paginate.amountPages);

  const arrPages: number[] = Array(amountPages - 2).fill(2);
  const pages = amountPages > 2 ? arrPages.map((_, i) => i + 2) : [];

  const buttons = pages.map((p) => {
    let currentClass = '' as string;
    if (activePage === p) currentClass = 'active';
    if (Math.abs(activePage - p) > 1) currentClass = 'invisible';
    return (
      <div className={`cursor ${currentClass}`} key={p} onClick={() => handlePage(p)}>
        {p}
      </div>
    );
  });

  const handlePage = (page: number) => {
    dispatch(active(page));
    dispatch(reposFetch({ repos_url, items, activePage: page }));
  };

  return (
    <div className='paginate'>
      <div
        className='paginate__left'
        onClick={() => (activePage > 1 ? handlePage(activePage - 1) : false)}
      >
        <img src='./assets/arrow-left.svg' alt='left' />
      </div>
      <div className='paginate__numbers'>
        <div className={`cursor ${activePage === 1 ? 'active' : ''}`} onClick={() => handlePage(1)}>
          1
        </div>
        <div className={amountPages < 6 || activePage < 4 ? 'invisible' : ''}>...</div>
        {buttons}
        <div className={amountPages < 6 || amountPages - activePage < 3 ? 'invisible' : ''}>
          ...
        </div>
        <div
          className={`cursor ${activePage === amountPages ? 'active' : ''}`}
          onClick={() => handlePage(amountPages)}
        >
          {amountPages}
        </div>
      </div>
      <div
        className='paginate__right'
        onClick={() => (activePage < amountPages ? handlePage(activePage + 1) : false)}
      >
        <img src='./assets/arrow-right.svg' alt='right' />
      </div>
    </div>
  );
};
