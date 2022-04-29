import React from 'react';
import { PaginateItems } from '../PaginateItems/PaginateItems';
import { PaginatePages } from '../PaginatePages/PaginatePages';
import './Paginator.scss';

export const Paginator = () => {
  return (
    <div className='paginator'>
      <PaginateItems />
      <PaginatePages />
    </div>
  );
};
