import React, { useState } from 'react';
import './Search.scss';

type IProps = {
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ setName }: IProps) => {
  const [text, setText] = useState('');

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(text);
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input type='text' className='search__text' value={text} onChange={handleText} />
      <input type='submit' hidden />
    </form>
  );
};
