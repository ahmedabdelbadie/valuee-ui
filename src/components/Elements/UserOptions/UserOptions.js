
import React, { useState, useCallback } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import { Navigate } from "react-router-dom";



const UserMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

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
    if (redirectToLogin) {
        return <Navigate to="/login" />;
    }


    return (
        <>
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
        </>
    );
};

export default UserMenu;
