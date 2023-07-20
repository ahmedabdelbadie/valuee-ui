import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/Store";
import { useTheme } from "@mui/material";

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
  const thene = useTheme();

  console.log(thene);
  return (
    <Provider store={store}>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen"></div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>{children}</Router>
        </ErrorBoundary>
      </React.Suspense>
    </Provider>
  );
};
