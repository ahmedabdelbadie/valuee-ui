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
import { changeTheme } from "redux/Slices/Config";
const Navbar = () => {
  const Nav = styled(MuiAppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
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
  const { isLight } = useSelector((state) => state.config);
  const switchTheme = () => {
    console.log(isLight);
    dispatch(changeTheme(!isLight));
  };
  const numberOfNotifications = 3;
  return (
    <Nav position="relative" sx={{ boxShadow: "0 0 0 0" }}>
      <Toolbar>
        <IconButton
          onClick={handleToggle}
          aria-label="menu"
          edge="start"
          size="large"
          color="inherit"
          sx={{ mr: 2, ...(isOpen && { display: "block" }) }}
        >
          <MenuIcon />
        </IconButton>

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
