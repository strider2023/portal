import React from 'react';

import { Divider, Grid } from '@material-ui/core';

import './businessDetails.scss';

function BusinessDetailsCard(props) {
    return (
        <Grid container spacing={2} className="business-details-card">
            <Grid item xs={12}>
                <h1>{props.data.name}</h1>
            </Grid>
            <Grid item xs={12}>
                <p>{props.data.description}</p>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <h4>Invit Business Id:</h4>
                <p>{props.data.businessId}</p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h4>Year of Establishment:</h4>
                <p>{props.data.yearOfEstablishment}</p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h4>Holding Type:</h4>
                <p>{props.data.businessType}</p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h4>Employee Count:</h4>
                <p>{props.data.employeesCount}</p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h4>PAN:</h4>
                <p>{props.data.pan}</p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h4>GSTIN:</h4>
                <p>{props.data.gstin}</p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h4>MSMED:</h4>
                <p>{props.data.msmed}</p>
            </Grid>
        </Grid>
    )
}

export default BusinessDetailsCard
