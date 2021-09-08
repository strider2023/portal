import React, { useState } from 'react';
import { Container, Link, Hidden, Button } from '@material-ui/core';
import Notiflix from "notiflix";
import { useMutation, gql } from '@apollo/client';
import AppForms from '../common/components/AppForms';

import "./styles/login.scss";

const AUTHENTICATE = gql`
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
    type: "object",
    required: [
        "email"
    ],
    properties: {
        email: {
            type: "string",
            title: "Email",
        }
    }
};

const uiSchema = {
    "email": {
        "ui:autofocus": true,
        "ui:autocomplete": "email",
        "ui:gridSm": 12,
        "ui:options": {
            "inputType": "email"
        }
    }
};

function ForgotPassword() {
    const [formData, setFormData] = useState(null);
    const [userLogin, { loading, data, error }] = useMutation(AUTHENTICATE, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    if (loading) {
        Notiflix.Loading.dots();
    }

    if (data) {

    }

    const handleSubmit = (e) => {
        console.log(formData);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Hidden smDown>
                <div id="background-img" className="login-image" ></div>
            </Hidden>
            <div className="login-base-container">
                <h1>{process.env.REACT_APP_NAME}</h1>
                <AppForms
                    className="login-form"
                    schema={formSchema}
                    uiSchema={uiSchema}
                    formData={formData}
                    spacing={3}
                    onChange={e => setFormData(e.formData)}
                    onSubmit={handleSubmit}>
                    <Button type={"submit"} variant="contained" color="primary" fullWidth className="login-button">Retrieve Password</Button>
                </AppForms>
                <Link href="/login" variant="body2">
                    Back to Login
                </Link>
                <Link href="/register" className="register-link" variant="body2">
                    Register
                </Link>
            </div>
        </Container>
    )
}

export default ForgotPassword
