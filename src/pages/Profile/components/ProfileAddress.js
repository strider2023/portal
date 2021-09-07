import React from 'react'

import { Button } from '@material-ui/core'

import './styles/profile.scss'

function ProfileAddress() {
    return (
        <div className="edit-card">
            <div className="edit-header">
                <h3>Address</h3>
                <Button className="edit-button">Edit</Button>
            </div>
            <div className="edit-info-child">
                <p>Address</p>
                <h5>Address</h5>
                <p>City</p>
                <h5>City</h5>
                <p>Postal Code</p>
                <h5>Postal Code</h5>
                <p>State</p>
                <h5>State</h5>
            </div>
        </div>
    )
}

export default ProfileAddress
