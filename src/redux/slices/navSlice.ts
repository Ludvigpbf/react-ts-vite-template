// menuSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "menu",
  initialState: {
    isNavOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isNavOpen = true;
    },
    closeMenu: (state) => {
      state.isNavOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = navSlice.actions;
export default navSlice.reducer;
