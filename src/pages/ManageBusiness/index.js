import { React, useEffect, useState } from 'react';
import { Button, Grid, TextField, CssBaseline, MenuItem, Container } from '@material-ui/core';
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/material-ui";
import { useMutation, gql } from '@apollo/client';
import Notiflix from "notiflix";
import AppLayout from '../../common/layouts/AppLayout';

import './manageBusiness.scss';

const MUTATE_BUSINESS = gql`
      mutation ($userId: String!, $password: String!){
        authenticate(userId: $userId, password: $password) {
            firstName
            token
            lastName
            emailVerified
            middleName
            organizationId
            phone
            phoneVerified
            roles
            username
            email
        }
      }
    `

const formSchema = {
    title: "Login",
    type: "object",
    required: [
        "email",
        "password"
    ],
    properties: {
        email: {
            type: "string",
            title: "Email",
        },
        password: {
            type: "string",
            title: "Password",
        }
    }
};

const uiSchema = {
    "email": {
        "ui:autofocus": true,
        "ui:autocomplete": "email",
        "ui:options": {
            "inputType": "email"
        }
    },
    "password": {
        "ui:widget": "password"
    }
};

function ManageBusiness(props) {
    let { businessId } = useParams();
    const history = useHistory();
    const [formData, setFormData] = useState(null);
    const [userLogin, { loading, data, error }] = useMutation(MUTATE_BUSINESS, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    const handleSubmit = (e) => {
        console.log(formData);
        // userLogin({ variables: { 'userId': formData.email, 'password': formData.password } });
    }

    return (
        <AppLayout headerTitle={process.env.REACT_APP_NAME} showBack="true">
            <Form
                schema={formSchema}
                uiSchema={uiSchema}
                formData={formData}
                onChange={e => setFormData(e.formData)}
                onSubmit={handleSubmit} />
        </AppLayout>
    )
}

export default ManageBusiness
