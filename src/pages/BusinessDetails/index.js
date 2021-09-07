import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useParams } from "react-router-dom";

import { Paper, Tabs, Tab } from '@material-ui/core';
import TabPanel from '../../common/components/TabPanel';

import AppLayout from '../../common/layouts/AppLayout';

import BusinessDetailsCard from './components/BusinessDetailsCard';
import BusinessContactDetails from './components/BusinessContactDetails';
import BusinessAddressDetails from './components/BusinessAddressDetails';

function BusinessDetails() {
    const cookies = new Cookies();
    let { businessId } = useParams();
    const [businessData, setBusinessData] = React.useState(null);
    const [businessDetailsTab, setBusinessDetailsTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setBusinessDetailsTab(newValue);
    };

    useEffect(() => {

    }, []);

    return (
        <AppLayout headerTitle={process.env.REACT_APP_NAME} showBack="true">
            {
                businessData ? (<>
                    <Paper elevation={2}>
                        <Tabs
                            value={businessDetailsTab}
                            onChange={handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable">
                            <Tab label="Business Details" />
                            <Tab label="Contact Details" />
                            <Tab label="Addresses" />
                            {(cookies.get('roles').indexOf('system-admin') > -1) ? <Tab label="User Details" /> : null}
                        </Tabs>
                    </Paper>
                    <TabPanel value={businessDetailsTab} index={0}>
                        <BusinessDetailsCard data={businessData} />
                    </TabPanel>
                    <TabPanel value={businessDetailsTab} index={1}>
                        <BusinessContactDetails data={businessData} />
                    </TabPanel>
                    <TabPanel value={businessDetailsTab} index={2}>
                        <BusinessAddressDetails data={businessData} />
                    </TabPanel>
                    {
                        (cookies.get('roles').indexOf('system-admin') > -1) ?
                            (<TabPanel value={businessDetailsTab} index={3}>

                            </TabPanel>) : null}
                </>) : null
            }
        </AppLayout>
    )
}

export default BusinessDetails
