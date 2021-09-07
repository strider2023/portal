import { React, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/material-ui";
import { useMutation, gql } from '@apollo/client';
import Notiflix from "notiflix";
import AppLayout from '../../common/layouts/AppLayout';

import AppForms from '../../common/components/AppForms';

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
        "emailVerified",
        "phoneVerified",
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
        "emailVerified": {
            "type": "boolean",
            "title": "Email Verified?",
            "default": false
        },
        "phoneVerified": {
            "type": "boolean",
            "title": "Phone Number Verfied?",
            "default": false
        },
        "roles": {
            "type": "string",
            "title": "User Roles",
            "enum": [
                "foo",
                "bar"
            ],
            "enumNames": [
                "Foo",
                "Bar"
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
    }
};

function ManageUser(props) {
    let { userId } = useParams();
    const history = useHistory();
    const [formData, setFormData] = useState(null);
    const [userLogin, { loading, data, error }] = useMutation(MUTATE_USER, {
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
            <AppForms
                schema={formSchema}
                uiSchema={uiSchema}
                formData={formData}
                spacing={3}
                columnsXs={1}
                columnsSm={2}
                onChange={e => setFormData(e.formData)}
                onSubmit={handleSubmit} />
        </AppLayout>
    )
}

export default ManageUser
