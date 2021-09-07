import React from 'react';

import { Typography, Button, TextField, MenuItem, Grid } from '@material-ui/core';

import './tableFilters.scss';

function OrdersFilterView(props) {

    const handleChange = (event) => {

    };

    const handleFilterFormSubmit = (event) => {
        
    };

    const handleFilterFormReset = (event) => {

    }

    return (
        <div className="table-filter-container">
            <Typography paragraph>Filter By:</Typography>
            <form noValidate autoComplete="off" className="form-container" onSubmit={handleFilterFormSubmit} onReset={handleFilterFormReset}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="from-date"
                            label="From"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="to-date"
                            label="To"
                            type="date"
                            variant="outlined"
                            fullWidth
                            disabled
                            helperText="Enter From date to enable."
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField id="filter-text" label="Vendor Name" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="filter-select"
                            select
                            label="Status"
                            onChange={handleChange}
                            helperText="Select the order status."
                            fullWidth
                            variant="outlined">
                            {/* {getOrderStatuses().map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))} */}
                        </TextField>
                    </Grid>
                </Grid>
                <Button className="form-search-btn" type="submit">Search</Button>
                <Button className="form-reset-btn" type="reset">Reset</Button>
            </form>
        </div>
    )
}

export default OrdersFilterView
