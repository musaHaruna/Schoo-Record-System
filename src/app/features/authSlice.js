import { createSlice } from "@reduxjs/toolkit";

const initiateState = {
  token: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState: initiateState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    logOut: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
      window.location = "/login";
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export default authSlice.reducer;
