import React from 'react';
// import './styles/notFound.scss';

function SessionExpired(props) {

    return (
        <div className="not-found-container">
            <div className="header-container">
                <p className="app-logo">Invit</p>
                <p className="app-subtitle">{props.message}</p>
                <p className="back-link-btn" onClick={props.handleBackToLogin}>Back to Login</p>
            </div>
        </div>
    )
}

export default SessionExpired
