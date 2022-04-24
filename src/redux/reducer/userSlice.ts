import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IUserState {
  nick: string;
}

const initialState: IUserState = {
  nick: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state) => {},
    wrong: (state) => {},
    empty: (state) => {},
  },
});

export const { update, wrong, empty } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.nick;
export default userSlice.reducer;
