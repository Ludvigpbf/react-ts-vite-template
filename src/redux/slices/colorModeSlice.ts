// colorModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState: { activeColor: "dark" }, // Default color, change to "light" for light mode
  reducers: {
    colorMode: (_state, action) => ({ activeColor: action.payload }),
  },
});

export const { colorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;