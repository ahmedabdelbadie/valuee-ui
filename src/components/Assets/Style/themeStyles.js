import { createTheme } from "@mui/material/styles";

// Light theme
export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#DEE0ED",
        },
        background: {
            default: "#f8f8f8",
        },
        text: {
            primary: "#333",
        },
    },
    typography: {
        fontSize: 16,
        color: "#333",

        h1: {
            fontSize: "2.5rem",
            color: "#000",
        },
        h2: {
            fontSize: "2rem",
            color: "#000",
        },
    },
});

// Dark theme
export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#3e4676",
        },
        background: {
            default: "#1a1a1a",
        },
        text: {
            primary: "#ffffff",
        },
    },
    typography: {

        fontSize: 16,
        color: "#ffffff",
        h1: {
            fontSize: "2.5rem",
            color: "#fff",
        },
        h2: {
            fontSize: "2rem",
            color: "#fff",
        },
    },
});
