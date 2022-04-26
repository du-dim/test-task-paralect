import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../types';
import { userFetch } from '../thunk/fetchUser';

const initialState: IUserState = {
  dataUser: null,
  status: 'start',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(userFetch.pending, (state) => {
      state.dataUser = null;
      state.status = 'loading';
    });
    bulder.addCase(userFetch.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = 'presence';
    });
    bulder.addCase(userFetch.rejected, (state) => {
      state.dataUser = null;
      state.status = 'nothing';
    });
  },
  reducers: {
    start: (state) => {
      state.dataUser = null;
      state.status = 'start';
    },
  },
});

export const { start } = userSlice.actions;
export default userSlice.reducer;
