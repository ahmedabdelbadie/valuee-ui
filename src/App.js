import React from "react";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import store from "redux/Store";

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </Provider>
  );
}

export default App;
