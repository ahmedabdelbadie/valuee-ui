import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"), "Dashboard");
const GL = lazy(() => import("../pages/General-ledger/General-ledger"), "GL");
const Organization = lazy(
  () => import("../pages/Organization/Organization"),
  "Organization"
);
console.log("dash");
console.log(Dashboard);

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "general-ledger", element: <GL /> },
      { path: "orgnization", element: <Organization /> },
      { path: "*", element: <Dashboard /> },
    ],
  },
];
