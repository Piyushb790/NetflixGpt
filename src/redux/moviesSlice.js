import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailor: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailor: (state, action) => {
      state.trailor = action.payload;
    },
  },
});
export const { addMovies, addTrailor } = moviesSlice.actions;
export default moviesSlice.reducer;
