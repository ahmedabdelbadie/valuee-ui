import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "components/Footer/Footer";
import { styled } from "@mui/material/styles";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { toggleOpen } from "../redux/Slices/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
const Mainlayout = () => {
  const { isOpen, drawerWidth } = useSelector((state) => state.sidebar);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleOpen());
  };
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Navbar />

      <Sidebar />
      <Main open={isOpen}>
        <DrawerHeader />
        <Suspense fallback="Loading...">
          <Outlet />
          <Footer />
        </Suspense>
      </Main>
    </Box>
  );
};

export default Mainlayout;
