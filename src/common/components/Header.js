import React from 'react';
import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles/header.scss'

function Header(props) {
    const history = useHistory();

    const handleBack = (event) => {
        history.goBack();
        event.preventDefault();
    }

    return (
        <AppBar position="static" >
            <Toolbar className="headerBase">
                {props.showHamburger ?
                    (<IconButton edge="start" color="inherit" aria-label="menu" onClick={props.onDrawerToggle}>
                        <MenuIcon />
                    </IconButton>)
                    : null
                }
                {
                    props.showBack ?
                        (<IconButton edge="start" color="inherit" aria-label="menu" onClick={props.overrideBack ? props.overrideBack : handleBack}>
                            <ArrowBackIcon />
                        </IconButton>)
                        : null
                }
                <Typography component="h1" variant="h6" color="inherit" noWrap className="title">
                    {props.headerTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
