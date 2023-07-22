import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../components/Assets/Style/themeStyles";
import store from "redux/Store";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Oops, something went wrong :(</h2>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center w-screen h-screen"></div>
          }
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router>{children}</Router>
          </ErrorBoundary>
        </React.Suspense>
      </ThemeProvider>
    </Provider>
  );
};
