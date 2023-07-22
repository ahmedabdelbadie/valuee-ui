import { createSlice } from "@reduxjs/toolkit";
import config from "../../config";
const customizationReducer = createSlice({
  name: "sidebar",
  initialState: {
    defaultId: "default",
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
  },
  reducers: {
    changeFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    changeBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
  },
});

export const { changeFontFamily, changeBorderRadius } =
  customizationReducer.actions;

export default customizationReducer.reducer;
