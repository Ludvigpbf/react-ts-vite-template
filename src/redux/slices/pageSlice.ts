// pageSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pages",
  initialState: {
    activePage: "home",
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = pageSlice.actions;
export default pageSlice.reducer;
