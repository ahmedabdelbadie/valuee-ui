import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

// material-ui
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../themes";
import store from "redux/Store";
import { useTheme } from "@mui/material";
import { Provider, useSelector } from "react-redux";

const AppTheme = (props) => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectfirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center w-screen h-screen"></div>
          }
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router>{props.children}</Router>
          </ErrorBoundary>
        </React.Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AppTheme children={children} />
    </Provider>
  );
};
