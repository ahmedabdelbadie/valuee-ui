import React from "react";
import Logo from "../../components/Assets/Images/Copy of VALUE+-LogoArtboard-1-copy-15.webp";
import {
  IconButton,
  Tooltip,
  Typography,
  Toolbar,
  Avatar,
  Badge,
  Link,
  Switch,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Menu as MenuIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../redux/Slices/Sidebar";
import Notifications from "@mui/icons-material/Notifications";
import UserOptions from "../Elements/UserOptions/UserOptions";
import { changeTheme } from "../../redux/Slices/theme";




const Navbar = () => {
  // Define your drawerWidth or import it from somewhere
  const drawerWidth = 240;

  const Nav = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));



  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleOpen());
  };


  // Handle theme change by dispatching the changeTheme action
  const switchTheme = () => {
    dispatch(changeTheme());
  };
  const numberOfNotifications = 3;


  return (
    <Nav position="fixed" open={isOpen}>
      <Toolbar>
        <IconButton
          onClick={handleToggle}
          aria-label="menu"
          edge="start"
          size="large"
          color="inherit"
          sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <Link href="/">
          <Tooltip title="Value">
            <IconButton variant="square" sx={{ p: 0 }}>
              <Avatar variant="square" alt="logo" src={Logo} />
            </IconButton>
          </Tooltip>
        </Link>

        <Typography ml={6} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Value Plus ERP
        </Typography>

        <Switch onChange={switchTheme} color="default" />

        <IconButton color="inherit">
          <Badge badgeContent={numberOfNotifications} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <UserOptions />
      </Toolbar>
    </Nav>
  );
};

export default Navbar;
