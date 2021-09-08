import { React, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/material-ui";
import { useMutation, gql } from '@apollo/client';
import Notiflix from "notiflix";

import AppForms from '../../common/components/AppForms';
import { Container, Link } from '@material-ui/core';

import '../styles/register.scss'

const MUTATE_USER = gql`
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
    "type": "object",
    "required": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "password",
        "roles"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First Name"
        },
        "middleName": {
            "type": "string",
            "title": "Middle Name"
        },
        "lastName": {
            "type": "string",
            "title": "Last Name"
        },
        "email": {
            "type": "string",
            "title": "Email"
        },
        "phone": {
            "type": "string",
            "title": "Phone Number",
            "minLength": 10
        },
        "password": {
            "type": "string",
            "title": "Password"
        },
        "roles": {
            "type": "string",
            "title": "User Role",
            "enum": [
                "buyer",
                "seller"
            ],
            "enumNames": [
                "Buyer",
                "Seller"
            ]
        }
    }
};

const uiSchema = {
    "firstName": {
        "ui:gridSm": 4
    },
    "middleName": {
        "ui:gridSm": 4
    },
    "lastName": {
        "ui:gridSm": 4
    },
    "phone": {
        "ui:gridSm": 6
    },
    "email": {
        "ui:autofocus": true,
        "ui:autocomplete": "email",
        "ui:gridSm": 6,
        "ui:options": {
            "inputType": "email"
        }
    },
    "password": {
        "ui:widget": "password",
        "ui:gridSm": 6
    },
    "roles": {
        "ui:gridSm": 6
    }
};

function Register() {
    const history = useHistory();
    const [formData, setFormData] = useState(null);
    const [userRegister, { loading, data, error }] = useMutation(MUTATE_USER, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    if (loading) {
        Notiflix.Loading.dots();
    }

    if (data) {
        Notiflix.Loading.remove(300);
        history.replace('/app');
    }

    const handleSubmit = (e) => {
        console.log(formData);
    }

    return (
        <Container component="main" maxWidth="lg">
            <div className="register-base-container">
                <h1>{process.env.REACT_APP_NAME}</h1>
                <AppForms
                    schema={formSchema}
                    uiSchema={uiSchema}
                    formData={formData}
                    spacing={3}
                    onChange={e => setFormData(e.formData)}
                    onSubmit={handleSubmit} />

                <Link href="/" variant="body2">
                    Back to Login
                </Link>
            </div>
        </Container>
    )
}

export default Register
