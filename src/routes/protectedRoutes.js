import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import React from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";

const Dashboard = lazy(
  () => import("../pages/Dashboard/Dashboard"),
  "Dashboard"
);
const GL = lazy(() => import("../pages/General-ledger/General-ledger"), "GL");
const GLCharts = lazy(
  () => import("../pages/General-ledger/General-Ledger-Charts"),
  "GLCharts"
);
const Organization = lazy(
  () => import("../pages/Organization/Organization"),
  "Organization"
);
const CompanyList = lazy(
  () => import("../features/Organization/pages/Company/List"),
  "CompanyList"
);


const Login = lazy(
  () => import("../Services/auth/pages/Login"),
  "Login"
);
const App = () => {
  const theme = useTheme();
  const MainContainer = styled(Box)({
    minHeight: "100vh",
    "&::before": {
      width: "100%",
      height: "264px",
      position: "absolute",
      top: "0",
      left: "0",
      background:
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.main,
      content: "''",
      zIndex: 0,
    },
  });

  return (
    <MainContainer>
      <MainLayout />
    </MainContainer>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "general-ledger", element: <GL /> },
      { path: "gl/charts", element: <GLCharts /> },
      { path: "organization", element: <Organization /> },
      { path: "company", element: <CompanyList /> },
      { path: "login", element: <Login /> },
    ],
  },
];
