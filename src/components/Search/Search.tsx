import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { start, userFetch } from '../../redux/reducer/userSlice';
import './Search.scss';

export const Search = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(userFetch(username.toLocaleLowerCase().trim()));
    } else dispatch(start());
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        className='search__text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type='submit' hidden />
    </form>
  );
};
