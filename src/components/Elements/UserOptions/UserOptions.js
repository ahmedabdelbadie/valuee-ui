// UserMenu.js
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";

const UserMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <IconButton color="inherit" onClick={handleMenuToggle}>
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={isMenuOpen}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ marginTop: "40px" }} // Add the margin directly to the Menu
            >
                <MenuItem onClick={handleMenuClose}>
                    <AccountCircle sx={{ marginRight: 1 }} />
                    Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ExitToApp sx={{ marginRight: 1 }} />
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;
