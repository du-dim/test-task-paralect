import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IReposState, IDataRepos } from '../../types';

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

const initialState: IReposState = {
  dataRepos: null,
  statusRepos: 'nothing',
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(reposFetch.pending, (state) => {
      state.dataRepos = null;
      state.statusRepos = 'loading';
    });
    bulder.addCase(reposFetch.fulfilled, (state, action) => {
      state.dataRepos = action.payload;
      state.statusRepos = 'presence';
    });
    bulder.addCase(reposFetch.rejected, (state) => {
      state.dataRepos = null;
      state.statusRepos = 'nothing';
    });
  },
  reducers: {},
});

export default reposSlice.reducer;
