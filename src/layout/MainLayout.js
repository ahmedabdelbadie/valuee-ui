import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "components/Footer/Footer";
import { styled } from "@mui/material/styles";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

import { useSelector } from "react-redux";
import { Box } from "@mui/material";
const Mainlayout = () => {
  const { isOpen, drawerWidth } = useSelector((state) => state.sidebar);
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      display: "block",

      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin-left", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar />
      <Main open={isOpen}>
        <Navbar />
        <Suspense fallback="Loading...">
          <Outlet />
          <Footer />
        </Suspense>
      </Main>
    </Box>
  );
};

export default Mainlayout;
