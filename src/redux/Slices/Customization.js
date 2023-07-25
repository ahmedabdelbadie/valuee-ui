import { createSlice } from "@reduxjs/toolkit";
import config from "../../config";

const customizationReducer = createSlice({
  name: "sidebar",
  initialState: {
    defaultId: "default",
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    navType: "default", // Set a default value for navType
  },
  reducers: {
    changeFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    changeBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
    changeNavType: (state, action) => {
      state.navType = action.payload;
    },
  },
});

export const { changeFontFamily, changeBorderRadius, changeNavType } =
  customizationReducer.actions;

export default customizationReducer.reducer;
