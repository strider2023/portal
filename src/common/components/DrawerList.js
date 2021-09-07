import React from 'react'
import Cookies from 'universal-cookie';
import { ListItem, List, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './styles/header.scss';

const user = [
    { title: 'Dashboard', icon: 'dashboard', path: '/app' },
    { title: 'Orders', icon: 'description', path: '/app/orders' },
    { title: 'Businesses', icon: 'apartment', path: '/app/businesses' },
    { title: 'Rules & Validations', icon: 'ballot', path: '/app/rules' },
    { title: 'Users', icon: 'supervised_user_circle', path: '/app/users' },
    { title: 'Profile', icon: 'account_circle', path: '/app/profile' }];

const admin = [
    { title: 'Dashboard', icon: 'dashboard', path: '/app' },
    { title: 'Users', icon: 'supervised_user_circle', path: '/app/users' },
    { title: 'Businesses', icon: 'apartment', path: '/app/businesses' },
    { title: 'Rules & Validations', icon: 'ballot', path: '/app/rules' },
    { title: 'Profile', icon: 'account_circle', path: '/app/profile' }
];

const populateList = (data) => {
    return (
        <List className="drawer-list">
            {
                data.map((item, index) => {
                    return (
                        <Link to={item.path} className="drawer-list-link" key={index}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>{item.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>)
                })
            }

        </List>
    )
}

function DrawerList() {
    const cookies = new Cookies();
    console.log(cookies.get('roles'));
    if (cookies.get('roles').indexOf('system-admin') > -1) {
        return populateList(admin);
    } else if (cookies.get('roles').indexOf('company-admin') > -1) {
        return populateList(user);
    } else {
        return (<div></div>);
    }
}

export default DrawerList
