import React from 'react';

import { CssBaseline, Container } from '@material-ui/core';
import Header from '../components/Header';
import AppDrawer from '../components/Drawer';

import * as layoutStyles from './styles/appLayout.module.scss'

function AppLayout(props) {

    const [drawerOpen, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={layoutStyles.root}>
            <CssBaseline />
            <Header headerTitle={props.headerTitle ? props.headerTitle : 'Home'}
                onDrawerToggle={handleDrawerOpen}
                showHamburger={props.showHamburger ? props.showHamburger : false}
                showBack={props.showBack ? props.showBack : false}
                overrideBack={props.overrideBack}></Header>
            <AppDrawer open={drawerOpen} handleDrawerClose={handleDrawerClose} />
            <main className={layoutStyles.content}>
                <Container maxWidth="lg" className={layoutStyles.container}>
                    {props.children}
                </Container>
            </main>
            {/* <Footer className={layoutStyles.footer} /> */}
        </div>
    )
}

export default AppLayout;
