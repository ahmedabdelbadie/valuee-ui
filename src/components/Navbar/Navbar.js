import React from "react";
import Logo from "../../components/Assets/Images/logo.png";
import {
  IconButton,
  Tooltip,
  Typography,
  Toolbar,
  Avatar,
  Badge,
  Link,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../redux/Slices/Sidebar";
const Navbar = () => {
  const Nav = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
  }));
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const { isOpen, drawerWidth } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleOpen());
  };
  const handleUserToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleUserClose = () => {
    setMenuOpen(false);
  };
  const handleLogout = useCallback(() => {
    localStorage.clear();
    handleUserClose();
    setRedirectToLogin(true);
  }, []);
  const switchTheme = () => {
    //dispatch(changeTheme());
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
            <Avatar
              variant="square"
              alt="logo"
              src={Logo}
              sx={{ width: 100 }}
            />
          </Tooltip>
        </Link>
        <Typography ml={6} variant="h1" component="div" sx={{ flexGrow: 1 }}>
          Value Plus ERP
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={numberOfNotifications} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Switch onChange={switchTheme} color="default" />

        <IconButton color="inherit" onClick={handleUserToggle}>
          <AccountCircle />
        </IconButton>

        <Menu
          anchorEl={isMenuOpen}
          open={isMenuOpen}
          onClose={handleUserClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ marginTop: "40px" }}
        >
          <MenuItem onClick={handleUserClose}>
            <AccountCircle sx={{ marginRight: 1 }} />
            Profile
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ExitToApp sx={{ marginRight: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </Nav>
  );
};
export default Navbar;
