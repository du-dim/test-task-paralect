import { createSlice } from '@reduxjs/toolkit';
import { IReposState } from '../../types';
import { reposFetch } from '../thunk/fetchRepos';

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
