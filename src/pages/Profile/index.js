import { React } from 'react';
import Cookies from 'universal-cookie';
import AppLayout from '../../common/layouts/AppLayout';
import { useHistory } from "react-router-dom";

import { Grid, Button } from '@material-ui/core';

import ProfileAddress from './components/ProfileAddress';
import ProfileBasicInfo from './components/ProfileBasicInfo';
import ProfilePassword from './components/ProfilePassword';
import ProfilePayments from './components/ProfilePayments';
import ProfileCompanyDetails from './components/ProfileCompanyDetails';

function Profile() {
    const cookies = new Cookies();
    const history = useHistory();

    const handleLogout = () => {
        for (const cookie in cookies.getAll()) {
            console.log(cookie);
            cookies.remove(cookie, { path: '/' });
        }
        history.replace('/login');
    }

    return (
        <AppLayout headerTitle={process.env.REACT_APP_NAME} showHamburger={true}>
            <Grid container spacing={3}>
                {
                    (cookies.get('roles').indexOf('system-admin') > -1) ? (
                        <>
                            <Grid item xs={12} sm={6}>
                                <ProfileBasicInfo />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ProfilePassword />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={12} sm={6}>
                                <ProfileBasicInfo />
                                <ProfilePassword />
                                <ProfileCompanyDetails />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ProfileAddress />
                                <ProfilePayments />
                            </Grid>
                        </>
                    )
                }
                <Grid xs={12}>
                    <Button color="secondary" fullWidth style={{ padding: 20, marginTop: 30 }} onClick={handleLogout}>Logout</Button>
                </Grid>
            </Grid>
        </AppLayout>
    )
}

export default Profile
