import React from 'react';

import { Button } from '@material-ui/core'

import './styles/profile.scss'

function ProfilePayments() {
    return (
        <div className="edit-card">
            <div className="edit-header">
                <h3>Manage Payments</h3>
                <Button className="edit-button">Edit</Button>
            </div>
            <div className="edit-info-child">
                <p>Option 1</p>
                <h5>Details</h5>
            </div>
        </div>
    )
}

export default ProfilePayments
