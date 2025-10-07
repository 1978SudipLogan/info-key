import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    color: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { color } = themeSlice.actions;
export default themeSlice.reducer;
