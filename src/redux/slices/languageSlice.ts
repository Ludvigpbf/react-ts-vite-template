// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { activeLang: "sv" }, // Default language, change to "en" for English
  reducers: {
    changeLanguage: (_state, action) => ({ activeLang: action.payload }),
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
