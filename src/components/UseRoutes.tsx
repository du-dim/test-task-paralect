import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Start } from './Start/Start';
import { NoUser } from './NoUser/NoUser';
import { User } from './User/User';

export const UseRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/nouser' element={<NoUser />} />
      <Route path='/user' element={<User />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
