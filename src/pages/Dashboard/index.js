import React from 'react'

import { Grid } from '@material-ui/core';

import AppLayout from '../../common/layouts/AppLayout';
import Charts from './components/Charts';
import DashboardCard from './components/DashboardCard';

import './dashboard.scss';

const dashboardCards = [
    { icon: 'shopping_cart', header: 'Purchase', value: 200000, showRupee: true, showRedirect: false, color: 'blue', redirect: '', redirectLabel: '' },
    { icon: 'receipt', header: 'Paid', value: 30000, showRupee: true, showRedirect: false, color: 'green', redirect: '', redirectLabel: '' },
    { icon: 'receipt', header: 'Pending', value: 170000, showRupee: true, showRedirect: false, color: 'red', redirect: '', redirectLabel: '' },
    { icon: 'store', header: 'Clients', value: 20, showRupee: false, showRedirect: true, color: 'dark', redirect: '/user/businesses', redirectLabel: 'View Businesses' },
    { icon: 'assignment_turned_in', header: 'Pending Approval', value: 11, showRupee: false, showRedirect: true, color: 'orange', redirect: '/user/businesses', redirectLabel: 'View Approvals' }
]

function Dashboard() {
    return (
        <AppLayout headerTitle={process.env.REACT_APP_NAME} showHamburger={true}>
            <Grid container spacing={3}>
                {
                    dashboardCards.map((data, index) => {
                        return (
                            <Grid item xs={12} md={4} lg={3} key={index}>
                                <DashboardCard data={data} />
                            </Grid>)
                    })
                }
                <Grid item xs={12} md={8} lg={9}>
                    <Charts />
                </Grid>
            </Grid>
        </AppLayout>
    )
}

export default Dashboard

