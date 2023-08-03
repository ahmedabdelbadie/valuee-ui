import { createSlice } from '@reduxjs/toolkit';
const sidebar = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false,
    drawerWidth: 250
  },
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { toggleOpen } = sidebar.actions;

export default sidebar.reducer;
