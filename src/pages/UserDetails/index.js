import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import AppLayout from '../../common/layouts/AppLayout';
import { Grid } from '@material-ui/core';

function UserDetails() {
    let { userId } = useParams();
    const [userData, setUserData] = React.useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        roles: ['']
    });
    const [userLoading, setUserLoading] = React.useState(false);

    useEffect(() => {

    }, []);

    return (
        <AppLayout headerTitle="Invit" showBack="true">
            <Grid container spacing={2}  className="user-details-container">
                <Grid item xs={12} sm={6}>
                    <h2>Name</h2>
                    <p>{userData?.firstName} {userData?.middleName} {userData?.lastName}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>Email</h2>
                    <p>{userData?.email}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>Phone</h2>
                    <p>{userData?.phone}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>Roles</h2>
                    <p>{userData.roles?.join([', '])}</p>
                </Grid>
            </Grid>
        </AppLayout>
    )
}

export default UserDetails
