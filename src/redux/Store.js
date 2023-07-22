import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/Sidebar";
import configReducer from "./Slices/Config";
import customizationReducer from "./Slices/Customization";
export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    config: configReducer,
  },
});
// customization: customizationReducer,
