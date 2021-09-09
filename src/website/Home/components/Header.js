import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, Hidden, Link, Icon, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import '../../styles/header.scss'

const navItems = [
    {
        name: 'Suppliers',
        path: '/',
        icon: 'supervised_user_circle'
    },
    {
        name: 'Products',
        path: '/',
        icon: 'shopping_basket'
    }
]

function Header() {
    const cookies = new Cookies();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (e) => {
        setCollapsed(!collapsed);
    };

    return (
        <AppBar position="static" className="website-header-container" elevation={0}>
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" color="primary" aria-label="menu" onClick={toggleCollapsed}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <img src={"../images/fabric.svg"} className="header-logo" />
                <Typography variant="h6" color="primary">
                    SilkRoad
                </Typography>
                <Hidden smDown>
                    {
                        navItems.map((obj, i) => (
                            <Link href={obj.path} variant="body2" className="nav-link" key={i}>
                                <Button color="primary">
                                    {obj.name}
                                </Button>
                            </Link>
                        ))
                    }
                </Hidden>
                <Hidden smUp>
                    <Drawer open={collapsed} onClose={toggleCollapsed}>
                        <div className="header-drawer-container">
                            {
                                cookies.get('firstName') ? (
                                    <>
                                        <Avatar className="header-drawer-profile-avatar">{`${cookies.get('firstName').charAt(0)}${cookies.get('lastName').charAt(0)}`}</Avatar>
                                        <Typography variant="h5" className="header-drawer-profile-name">
                                            {`${cookies.get('firstName')} ${cookies.get('lastName')}`}
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Avatar className="header-drawer-profile-avatar"><PersonIcon /></Avatar>
                                        <Button href="/login" className="header-drawer-login-btn">Login</Button>
                                    </>
                                )
                            }
                        </div>
                        <List className="drawer-list">
                            {
                                navItems.map((obj, index) => (
                                    <Link href={obj.path} variant="body2" className="nav-link">
                                        <ListItem button key={obj.name}>
                                            <ListItemIcon>
                                                <Icon>{obj.icon}</Icon>
                                            </ListItemIcon>
                                            <ListItemText primary={obj.name} />
                                        </ListItem>
                                    </Link>
                                ))
                            }
                        </List>
                        <div className="header-drawer-branding-container">
                            <h1>SilkRoad</h1>
                            <p>Version: 0.1.0</p>
                        </div>
                    </Drawer>
                </Hidden>
                <Link href="/login" variant="body2">
                    <Button color="primary">
                        <AccountCircleIcon />
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header