import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

const GL = lazy(() => import("../pages/general-ledger"), "GL");
const Organization = lazy(
  () => import("../pages/organization"),
  "Organization"
);

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
    path: "/app",
    element: <App />,
    children: [
      { path: "general-ledger", element: <GL /> },
      { path: "orgnization", element: <Organization /> },
    ],
  },
];
