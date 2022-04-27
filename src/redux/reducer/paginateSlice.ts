import { createSlice } from '@reduxjs/toolkit';
import { IPaginateState } from '../../types';

const initialState: IPaginateState = {
  amountItems: 4,
  amountPages: 1,
  activePage: 1,
};

export const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    active: (state, action) => {
      state.activePage = action.payload;
    },
    amount: (state, action) => {
      state.amountPages = Math.ceil(action.payload / state.amountItems);
    },
  },
});

export const { active, amount } = paginateSlice.actions;
export default paginateSlice.reducer;
