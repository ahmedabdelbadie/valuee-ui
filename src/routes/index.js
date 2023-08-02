import { useRoutes } from "react-router-dom";

// import { Landing } from "@/features/misc";
// import { useAuth } from "@/lib/auth";
import { publicRoutes } from "./publicRoutes";
import { protectedRoutes } from "./protectedRoutes";

import React from "react";

export const AppRoutes = () => {
  const auth = false; //useAuth();

  // const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = false ? protectedRoutes : publicRoutes;
  //  , ...commonRoutes
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
