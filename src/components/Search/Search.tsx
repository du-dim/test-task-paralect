import React, { useState } from 'react';
import './Search.scss';

type IProps = {
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ setName }: IProps) => {
  const [username, setUsername] = useState('');
  const github_url = `https://api.github.com/users/${username.trim()}/repos`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(github_url);
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else console.log('Something went wrong');
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
