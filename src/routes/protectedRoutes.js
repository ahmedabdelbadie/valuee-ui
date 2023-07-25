import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import React from "react";
import { Container } from "@mui/material";
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

const App = () => {
  return (
    <>
      <Container disableGutters={true} maxWidth={"xl"}>
        <MainLayout />
      </Container>
    </>
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
    ],
  },
];
