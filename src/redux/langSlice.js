import { createSlice } from "@reduxjs/toolkit";
import lang from "../utils/languageConstants";

const langSlice = createSlice({
  name: "langOpt",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
