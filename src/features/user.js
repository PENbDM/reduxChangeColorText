import { createSlice } from "@reduxjs/toolkit";
const inititalStateValue = { name: "", age: 0, email: "" };
export const userSlice = createSlice({
  name: "user",
  initialState: { value: inititalStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = inititalStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
