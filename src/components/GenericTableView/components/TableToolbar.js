import React from 'react';

import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, IconButton, Tooltip, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OrdersFilterView from '../filters/OrdersFilterView';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    filterContainer: {
        backgroundColor: '#242424',
        padding: theme.spacing(2),
        color: '#fff',
    }
}));

function TableToolbar(props) {
    const classes = useToolbarStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Toolbar className={clsx(classes.root)}>
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    {props.tableTitle}
                </Typography>
                {
                    props.showFilters ? (
                        <Tooltip title="Filter list">
                            <IconButton aria-label="filter list" onClick={handleExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Tooltip>
                    ) : null
                }
            </Toolbar>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <OrdersFilterView />
            </Collapse>
        </>
    );
}

export default TableToolbar
