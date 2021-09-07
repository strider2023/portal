import React from 'react'
import { Avatar } from '@material-ui/core';
import Cookies from 'universal-cookie';

import './styles/profile.scss'

function ProfileBasicInfo() {
    const cookies = new Cookies();
    return (
        <div className="profile-card">
            <Avatar className="profile-avatar">{`${cookies.get('firstName').charAt(0)}${cookies.get('lastName').charAt(0)}`}</Avatar>
            <div className="profile-info-child">
                <p>Name</p>
                <h5>{`${cookies.get('firstName')} ${cookies.get('lastName')}`}</h5>
                <p>Email</p>
                <h5>{`${cookies.get('email')}`}</h5>
                <p>Phone</p>
                <h5>{`${cookies.get('phone')}`}</h5>
            </div>
        </div>
    )
}

export default ProfileBasicInfo
