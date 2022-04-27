import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { active, amount } from '../../redux/reducer/paginateSlice';
import './Paginator.scss';

export const Paginator = () => {
  const dispatch = useDispatch();
  const public_repos = useAppSelector((state) => state.user.dataUser?.public_repos) as number;
  const activePage = useAppSelector((state) => state.paginate.activePage);
  const amountPages = useAppSelector((state) => state.paginate.amountPages);
  const items = useAppSelector((state) => state.paginate.amountItems);
  const start = (activePage - 1) * items + 1;
  const end = activePage * items;

  useEffect(() => {
    dispatch(amount(public_repos));
  }, [public_repos]);

  const pages =
    amountPages > 2
      ? Array(amountPages - 2)
          .fill(2)
          .map((_, i) => i + 2)
      : [];

  const buttons = pages.map((p) => {
    let currentClass = '' as string;
    if (activePage === p) currentClass = 'active';
    if (Math.abs(activePage - p) > 1) currentClass = 'inactive';

    return (
      <div className={currentClass} key={p} onClick={() => handlePage(p)}>
        {p}
      </div>
    );
  });

  const handlePage = (page: number) => {
    dispatch(active(page));
  };

  return (
    <div className='paginate'>
      <div className='paginate__items'>
        {start}-{end > public_repos ? public_repos : end} of {public_repos} items
      </div>
      <div className='paginate__pages'>
        <div className='paginate__pages'></div>
        <div
          className='paginate__pages_left'
          onClick={() => (activePage > 1 ? handlePage(activePage - 1) : false)}
        >
          <img src='./assets/arrow-left.svg' alt='left' />
        </div>
        <div className='paginate__pages_numbers'>
          <div className={activePage === 1 ? 'active' : ''} onClick={() => handlePage(1)}>
            1
          </div>
          <div className={amountPages < 6 || activePage < 4 ? 'inactive' : ''}>...</div>
          {buttons}
          <div className={amountPages < 6 || amountPages - activePage < 3 ? 'inactive' : ''}>
            ...
          </div>
          <div
            className={activePage === amountPages ? 'active' : ''}
            onClick={() => handlePage(amountPages)}
          >
            {amountPages}
          </div>
        </div>
        <div
          className='paginate__pages_right'
          onClick={() => (activePage < amountPages ? handlePage(activePage + 1) : false)}
        >
          <img src='./assets/arrow-right.svg' alt='right' />
        </div>
      </div>
    </div>
  );
};
