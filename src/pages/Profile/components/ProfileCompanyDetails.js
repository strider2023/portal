import React from 'react';

import { Button } from '@material-ui/core'

import './styles/profile.scss'

function ProfileCompanyDetails() {
    return (
        <div className="edit-card">
            <div className="edit-header">
                <h3>Comapny Details</h3>
                <Button className="edit-button">Edit</Button>
            </div>
            <div className="edit-info-child">
                <p>Company</p>
                <h5>Company</h5>
                <p>PAN</p>
                <h5>Pan Card Number</h5>
                <p>GSTIN</p>
                <h5>GSTIN</h5>
            </div>
        </div>
    )
}

export default ProfileCompanyDetails
