import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/Sidebar";
import configReducer from "./Slices/Config";
import themeReducer from "./Slices/theme"; // Adjust the path to your themeSlice file

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    config: configReducer,
    theme: themeReducer, // Include the themeReducer in the reducer object
  },
});
