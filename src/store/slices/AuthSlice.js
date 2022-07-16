import { createSlice } from "@reduxjs/toolkit";
export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    logged: false,
  },
  reducers: {
    logIn: (state) => {
      state.logged = true;
    },
    logOut: (state) => {
      state.logged = false;
    },
  },
});
export const { logIn, logOut } = AuthSlice.actions;
