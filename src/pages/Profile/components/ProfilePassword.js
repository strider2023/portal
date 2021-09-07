import React from 'react';

import { Button } from '@material-ui/core';

import './styles/profile.scss'

function ProfilePassword() {
    return (
        <div className="edit-card">
            <div className="edit-header">
                <h3>Password</h3>
                <Button className="edit-button">Edit</Button>
            </div>
            <div className="edit-info-child">
                <p>Last Updated</p>
                <h5>12 June 2021</h5>
            </div>
        </div>
    )
}

export default ProfilePassword
