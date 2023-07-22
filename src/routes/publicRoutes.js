// import { Login } from "@mui/icons-material";
// import { lazy } from "react";
import Login from '../pages/Login/Login'
// const { AuthRoutes } = lazy(() => import("@/features/auth"), "AuthRoutes");

export const publicRoutes = [
  // {
  //   path: "/auth/*",
  //   element: <>yy</>,
  // },

  {
    path: "/login",
    element: <><Login /></>,
  },

];
