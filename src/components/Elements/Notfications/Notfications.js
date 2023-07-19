import React, { Component } from 'react';
import { IconButton, Badge } from '@mui/material';
// import { Notifications as NotificationsIcon } from '@mui/icons-material/Notifications';
import { Notifications } from "@mui/icons-material";


class Notifications extends Component {
    render() {
        const staticNumberOfNotifications = 10;

        const { numberOfNotifications } = this.props;


        return (
            <IconButton color="inherit">
                <Badge badgeContent={staticNumberOfNotifications} color="error">
                    <Notifications />
                </Badge>
            </IconButton>
        );
    }
}

export default Notifications;
