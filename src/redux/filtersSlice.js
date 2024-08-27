import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectFilter = (state) => state.filters;

export const filtersReducer = filtersSlice.reducer;