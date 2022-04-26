import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDataUser } from '../../types';

export const userFetch = createAsyncThunk(
  'user/userFetch',
  async function (username: string, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        const dataUser: IDataUser = {
          login: data.login,
          name: data.name,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          public_repos: data.public_repos,
          repos_url: data.repos_url,
          followers: data.followers,
          following: data.following,
        };
        return dataUser;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(null);
    }
  }
);
