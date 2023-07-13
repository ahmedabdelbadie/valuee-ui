import { lazy } from "react";

const { AuthRoutes } = lazy(() => import("@/features/auth"), "AuthRoutes");

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <>yy</>,
  },
];
