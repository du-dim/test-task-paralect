import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUserState, IDataUser } from '../../types';

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
      console.log(state.dataUser);
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
