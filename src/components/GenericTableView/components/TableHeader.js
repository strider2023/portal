import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';

TableHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    columnDefs: PropTypes.array.isRequired
};

function TableHeader(props) {
    const { classes, order, orderBy, onRequestSort, columnDefs } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {columnDefs.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding="normal"
                        sortDirection={orderBy === headCell.id ? order : false} >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)} >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell align="center">Options</TableCell>
            </TableRow>
        </TableHead>
    );
}

export default TableHeader