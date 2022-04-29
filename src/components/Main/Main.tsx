import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { reposFetch } from '../../redux/thunk/fetchRepos';
import { Start } from '../Start/Start';
import { NoUser } from '../NoUser/NoUser';
import { User } from '../User/User';
import { Loader } from '../Loader/Loader';
import './Main.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const repos_url = useAppSelector((state) => state.user.dataUser?.repos_url) as string;
  const items = useAppSelector((state) => state.paginate.amountItems);
  const status = useAppSelector((state) => state.user.status);
  const propsFetchRepos = {
    repos_url: repos_url,
    items: items,
    activePage: 1,
  };
  const content = () => {
    switch (status) {
      case 'start':
        return <Start />;
      case 'loading':
        return <Loader />;
      case 'nothing':
        return <NoUser />;
      case 'presence':
        dispatch(reposFetch(propsFetchRepos));
        return <User />;
      default:
        return <Start />;
    }
  };
  return <div className='main'>{content()}</div>;
};
