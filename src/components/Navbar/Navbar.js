import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Assets/Images/Copy of VALUE+-LogoArtboard-1-copy-15.webp';
import { IconButton, Menu, MenuItem, Divider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ExitToApp, Person, Menu as MenuIcon } from '@mui/icons-material';
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownOpen = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} alt="logo" className="logo" />
          </NavLink>
        </div>

        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDropdownOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={dropdownAnchorEl}
                open={Boolean(dropdownAnchorEl)}
                onClose={handleDropdownClose}
              >
                <MenuItem onClick={handleDropdownClose}>
                  <NavLink to="/other-page1" className="nav-link" activeClassName="active">Other Page 1</NavLink>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <NavLink to="/other-page2" className="nav-link" activeClassName="active">Other Page 2</NavLink>
                </MenuItem>
              </Menu>
            </li>

            <li>

              <IconButton
                color="inherit"
                aria-label="notifications"
              // onClick={handleMenuOpen}
              >
                <NotificationsIcon />
              </IconButton>
            </li>

            <li className="nav-item">

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/profile" className="nav-link" activeClassName="active">
                    <AccountCircleIcon />
                    Profile
                  </NavLink>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/logout" className="nav-link" activeClassName="active">
                    <ExitToApp />
                    Logout
                  </NavLink>
                </MenuItem>
              </Menu>
            </li>
            <li className="nav-item">
              <IconButton
                color="inherit"
                aria-label="user-profile"
                onClick={handleMenuOpen}
              >
                <Person />
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
