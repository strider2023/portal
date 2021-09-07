import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Icon } from '@material-ui/core';

import './styles/dashboard.scss'

function DashboardCard(props) {
    return (
        <div className="dashboard-card">
            <Avatar className={`dashboard-avatar ${props.data.color}`}>
                <Icon>{props.data.icon}</Icon>
            </Avatar>
            <div className="dashboard-info-child">
                <p>{props.data.header}</p>
                <h5>
                    {
                        props.data.showRupee ? <span>₹</span> : null
                    }
                    {props.data.value}
                </h5>
                {
                    props.data.showRedirect ? (
                        <Link to={props.data.redirect} className="redirect-btn">
                            {props.data.redirectLabel}
                        </Link>) : null
                }
            </div>
        </div>
    )
}

export default DashboardCard
