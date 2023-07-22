
import { createSlice } from "@reduxjs/toolkit";

const isDarkModeEnabled = localStorage.getItem("isDarkMode") === "true";

const initialState = {
    isDarkMode: isDarkModeEnabled,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem("isDarkMode", state.isDarkMode);
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
