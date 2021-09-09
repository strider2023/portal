import React from 'react';

import { Button, Grid, Typography } from '@material-ui/core';

import '../../styles/footer.scss';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo-holder">
                <img src={"../images/fabric.svg"} className="footer-logo" />
                <Typography variant="h4" color="primary">
                    SilkRoad
                </Typography>
            </div>
            <Grid container className="footer-links-holder">
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>Policy</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>Terms and Conditions</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>About Us</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>Contact Us</Button>
                </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" align="center" className="footer-text-holder">
                {'Copyright © SilkRoad '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}

export default Footer
