import { React, useEffect, useState } from 'react';
import { Button, Grid, TextField, CssBaseline, MenuItem, Container } from '@material-ui/core';
import { useHistory, useParams } from "react-router-dom";
import AppLayout from '../../common/layouts/AppLayout';

import './manageBusiness.scss';

function ManageBusiness(props) {
    let { businessId } = useParams();
    const history = useHistory();
    const [createDialogStates, setCreateDialogStates] = useState([]);
    const [createDialogTypes, setCreateDialogTypes] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [business, setBusiness] = useState({
        name: "",
        description: "",
        pan: "",
        gstin: "",
        msmed: "",
        yearOfEstablishment: 1800,
        businessType: "",
        employeesCount: 0,
        email: "",
        phoneNumber: "",
        status: ""
    });
    const [address, setAddress] = useState({
        name: "Default",
        description: "Default Address",
        address: "",
        city: "",
        landmark: "",
        postalCode: 0,
        country: "",
        state: "",
        isPrimary: true
    });
    const [selectedRecord, setSelectedRecord] = useState(null);

    return (
        <AppLayout headerTitle={process.env.REACT_APP_NAME} showBack="true">
            
        </AppLayout>
    )
}

export default ManageBusiness
