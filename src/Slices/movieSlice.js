import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:{}
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateMovie:(state,action)=>{
      state.value=action.payload;
    },
  },
});

export const { updateMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
