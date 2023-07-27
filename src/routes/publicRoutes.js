import { lazy } from "react";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import { Box, Container, styled } from "@mui/material";
const Login = lazy(() => import("../Services/auth/pages/Login"), "Login");
const Register = lazy(
  () => import("../Services/auth/pages/Register"),
  "Register"
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const App = () => {
  return (
    <>
      <Container disableGutters={true} maxWidth={"xl"}>
        <Navbar />
        <Box sx={{ pt: 10 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
export const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
];
