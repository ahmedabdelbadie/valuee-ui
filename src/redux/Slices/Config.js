import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    Theme: "light",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload === "ar" ? "ar" : "en";
    },
    changeTheme: (state, action) => {
      state.Theme = action.payload === "dark" ? "dark" : "light";
    },
  },
});

export const { changeLang, changeTheme } = config.reducer;

export default config.reducer;
