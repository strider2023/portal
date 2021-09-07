import React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';

import './businessDetails.scss';

function BusinessAddressDetails(props) {
    return (
        <List maxWidth="lg" className="business-details-card">
            {
                props.data.addresses.map((data, index) => {
                    return (<>
                        <ListItem button key={index}>
                            <ListItemText 
                            primary={`${data.address}, ${data.landmark}`} 
                            secondary={`${data.city}, ${data.state}, ${data.country} - ${data.postalCode}`}/>
                        </ListItem>
                    </>)
                })
            }
        </List>
    )
}

export default BusinessAddressDetails
