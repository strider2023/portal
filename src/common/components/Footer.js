import React from 'react'

import { Typography } from '@material-ui/core';

function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Invit '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Footer
