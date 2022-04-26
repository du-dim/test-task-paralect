import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDataRepos } from '../../types';

export const reposFetch = createAsyncThunk(
  'repos/reposFetch',
  async function (username: string, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (response.ok) {
        const data = await response.json();
        const dataRepos: IDataRepos[] = data.map((d: IDataRepos) => {
          return { id: d.id, name: d.name, description: d.description };
        });
        if (dataRepos.length) {
          return dataRepos;
        } else {
          throw new Error('Repositories not found');
        }
      } else {
        throw new Error("Something's wrong");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(null);
    }
  }
);
