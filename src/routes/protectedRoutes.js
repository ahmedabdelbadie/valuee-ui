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
const Organization = lazy(
  () => import("../pages/Organization/Organization"),
  "Organization"
);
console.log("dash");
console.log(Dashboard);

const App = () => {
  return (
    <React.Fragment>
      <Container disableGutters={true} maxWidth={"xl"}>
        <MainLayout />
      </Container>
    </React.Fragment>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "general-ledger", element: <GL /> },
      { path: "organization", element: <Organization /> },
      { path: "*", element: <Dashboard /> },
    ],
  },
];
