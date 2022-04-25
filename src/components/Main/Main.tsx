import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Start } from '../Start/Start';
import { NoUser } from '../NoUser/NoUser';
import { User } from '../User/User';
import { Loader } from '../Loader/Loader';
import './Main.scss';

export const Main = () => {
  const status = useAppSelector((state) => state.user.status);
  const content = () => {
    switch (status) {
      case 'start':
        return <Start />;
      case 'loading':
        return <Loader />;
      case 'nothing':
        return <NoUser />;
      case 'presence':
        return <User />;
      default:
        return <Start />;
    }
  };
  return <div className='main'>{content()}</div>;
};
