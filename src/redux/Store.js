import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './Slices/Sidebar';
import configReducer from './Slices/Config';
export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    config: configReducer
  }
});
