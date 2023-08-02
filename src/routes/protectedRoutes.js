import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import React from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { lazyImport } from "utils/lazyImport";

const { Dashboard } = lazyImport(
  () => import("../features/Dashboard"),
  "Dashboard"
);
const { GLRoutes } = lazyImport(
  () => import("../features/general-ledger"),
  "GLRoutes"
);

const { OrganizationRoutes } = lazyImport(
  () => import("../features/Organization"),
  "OrganizationRoutes"
);

// const GLCharts = lazyImport(
//   () => import("../pages/General-ledger/General-Ledger-Charts"),
//   "GLCharts"
// );
// const Organization = lazyImport(
//   () => import("../pages/Organization/Organization"),
//   "Organization"
// );
// const CompanyList = lazyImport(
//   () => import("../features/Organization/pages/Company/List"),
//   "CompanyList"
// );
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
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/general-ledger/*", element: <GLRoutes /> },
      { path: "/organization/*", element: <OrganizationRoutes /> },
      // { path: "general-ledger", element: <GL /> },
      // { path: "gl/charts", element: <GLCharts /> },
      // { path: "organization", element: <Organization /> },
      // { path: "company", element: <CompanyList /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
