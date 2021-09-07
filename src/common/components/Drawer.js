import React from 'react'
import Cookies from 'universal-cookie';

import { Drawer, Typography, Avatar } from '@material-ui/core';
import DrawerList from './DrawerList';

import './styles/header.scss';

function AppDrawer(props) {
    const cookies = new Cookies();
    return (
        <Drawer anchor="left"
            open={props.open}
            variant="temporary"
            onEscapeKeyDown={props.handleDrawerClose}
            onBackdropClick={props.handleDrawerClose}>
            <div className="drawer-profile-container">
                <Avatar className="drawer-profile-avatar">{`${cookies.get('firstName').charAt(0)}${cookies.get('lastName').charAt(0)}`}</Avatar>
                <Typography variant="h5" className="drawer-profile-name">
                    {`${cookies.get('firstName')} ${cookies.get('lastName')}`}
                </Typography>
            </div>
            <DrawerList className="drawer-profile-list" />
            <div className="drawer-branding-container">
                <h1>Invit</h1>
                <p>Version: 0.1.0</p>
            </div>
            {/* <div id="background-img" className="menu-image" ></div> */}
        </Drawer>
    )
}

export default AppDrawer
