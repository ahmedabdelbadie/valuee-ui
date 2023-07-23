import { useRoutes } from "react-router-dom";

// import { Landing } from "@/features/misc";
// import { useAuth } from "@/lib/auth";

import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
import React from "react";

export const AppRoutes = () => {
  const auth = false; //useAuth();

  // const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = true ? protectedRoutes : publicRoutes;
  //  , ...commonRoutes
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
