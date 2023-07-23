import { lazy } from "react";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import { Container } from "@mui/material";
const Login = lazy(() => import("../Services/auth/routes/Login"), "Login");
const Register = lazy(
  () => import("../Services/auth/routes/Register"),
  "Register"
);

const App = () => {
  return (
    <React.Fragment>
      <Container disableGutters={true} maxWidth={"xl"}>
        <Navbar />

        <Outlet />
      </Container>
    </React.Fragment>
  );
};
export const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
];
