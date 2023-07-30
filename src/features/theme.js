import { createSlice } from "@reduxjs/toolkit";
const inititalStateValue = "";
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: inititalStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
