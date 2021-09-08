import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, Hidden, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import '../../styles/header.scss'

const navItems = [
    {
        name: 'Products',
        path: '/'
    },
    {
        name: 'Policy',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/'
    }
]

function Header() {
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
                        <List className="drawer-list">
                            {
                                navItems.map((obj, index) => (
                                    <Link href={obj.path} variant="body2" className="nav-link">
                                        <ListItem button key={obj.name}>
                                            {/* <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon /> : <AccountCircleIcon />}</ListItemIcon> */}
                                            <ListItemText primary={obj.name} />
                                        </ListItem>
                                    </Link>
                                ))
                            }
                        </List>
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