import React, { useState } from 'react';
import Form from "@rjsf/material-ui";
import { Container, Paper, Hidden } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import Notiflix from "notiflix";
import { useMutation, gql } from '@apollo/client';
import useAuthState from '../common/hooks/useAuthState';

import "./styles/login.scss";

const apiQuery = gql`
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

function Login() {
    const cookies = new Cookies();
    const history = useHistory();
    const { addAuth } = useAuthState();
    const [formData, setFormData] = useState(null);
    const [userLogin, { loading, data, error }] = useMutation(apiQuery, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    if (loading) {
        Notiflix.Loading.dots();
    }

    if (data) {
        // console.log(data.authenticate);
        for (const res in data.authenticate) {
            cookies.set(res, data.authenticate[res], { path: '/' });
        }
        console.log(cookies.get('roles'), history);
        const user = {
            roles: cookies.get('roles'),
            phone: cookies.get('phone'),
            lastName: cookies.get('lastName'),
            firstName: cookies.get('firstName'),
            email: cookies.get('email'),
            token: cookies.get('token')
        };
        addAuth({ status: 'success', error: null, user });
        Notiflix.Loading.remove(300);
        history.replace('/app');
    }

    const handleSubmit = (e) => {
        console.log(formData);
        userLogin({ variables: { 'userId': formData.email, 'password': formData.password } });
    }

    return (
        <Container component="main" maxWidth="xs">
            <Hidden smDown>
                <div id="background-img" className="login-image" ></div>
            </Hidden>
            <div className="login-base-container">
                <h1>{process.env.REACT_APP_NAME}</h1>
                <Paper className="login-form">
                    <Form
                        schema={formSchema}
                        uiSchema={uiSchema}
                        formData={formData}
                        onChange={e => setFormData(e.formData)}
                        onSubmit={handleSubmit} />
                </Paper>
            </div>
        </Container>
    )
}

export default Login
