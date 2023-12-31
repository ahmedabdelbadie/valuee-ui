import React from 'react';
import Logo from '../../components/Assets/Images/logo.png';
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
  FormControlLabel
} from '@mui/material';
import ProfileSection from './ProfileSection';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen } from '../../redux/Slices/Sidebar';
import { changeTheme } from '../../redux/Slices/Config';
import NotificationSection from './NotificationSection';
const Navbar = () => {
  const Nav = styled(MuiAppBar)(({ theme }) => ({
    boxShadow: '0 0 0 0',
    backgroundColor: theme.palette.primary
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
    dispatch(changeTheme(!isLight));
  };
  const numberOfNotifications = 3;
  return (
    <Nav position="relative">
      <Toolbar>
        <IconButton
          onClick={handleToggle}
          aria-label="menu"
          edge="start"
          size="large"
          color="inherit"
          sx={{ mr: 2, ...(isOpen && { display: 'block' }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography component="div" sx={{ ml: 'auto' }}>
          <FormControlLabel
            control={<Switch onChange={switchTheme} color="default" checked={isLight} />}
          />

          <ProfileSection />
        </Typography>
        <NotificationSection />
      </Toolbar>
    </Nav>
  );
};
export default Navbar;
