import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import './businessDetails.scss';

function BusinessContactDetails(props) {
    return (
        <List maxWidth="lg" className="business-details-card">
            <ListItem button>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary={props.data.email} />
            </ListItem>
            {
                props.data.phoneNumbers.map((data, index) => {
                    return (<>
                        <ListItem button>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${data.countryCode} ${data.phone}`} />
                        </ListItem>
                    </>)
                })
            }
        </List>
    )
}

export default BusinessContactDetails
