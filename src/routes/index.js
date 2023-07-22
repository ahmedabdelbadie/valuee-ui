import { useRoutes } from "react-router-dom";

// import { Landing } from "@/features/misc";
// import { useAuth } from "@/lib/auth";
import { publicRoutes } from "./publicRoutes"; // Uncomment this line

import { protectedRoutes } from "./protectedRoutes";
// import { publicRoutes } from "./publicRoutes";
import React from "react";
import { Container } from "@mui/material";
export const AppRoutes = () => {
  //   const auth = useAuth();

  // const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = [...protectedRoutes, ...publicRoutes];
  //, ...commonRoutes
  const element = useRoutes([...routes]);

  return <>{element}</>;
  //  <>{element}</>;
};




