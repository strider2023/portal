import React from 'react';
import { useHistory } from "react-router-dom";

import { IconButton, TableRow, TableCell, TableBody, Tooltip, Icon } from '@material-ui/core';

import './table.scss';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function GenericTableBody(props) {
    const history = useHistory();

    const handleViewClicked = (event, path, id) => {
        if (path.startsWith("dialog::")) {
            // Show dialog
        } else if (path.startsWith("delete::")) {
            props.handleDeleteOpen(path.split("::")[1]);
        } else {
            console.log(path, id);
            history.push(path.replace('${' + props.tableKey + '}', id));
        }
        event.preventDefault();
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TableBody>
            {
                stableSort(props.data, getComparator(props.order, props.orderBy))
                    .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
                    .map((row, index) => {
                        const rowId = row[props.tableKey]
                        return (
                            <TableRow
                                tabIndex={-1}
                                key={index}>
                                {
                                    props.columnDefs.map((item, index) => {
                                        return (<TableCell align="center" key={index}>{row[item.id]}</TableCell>)
                                    })
                                }
                                <TableCell>
                                    <div className="table-options-contianer">
                                        {
                                            props.optionsConfig.map((item, index) => {
                                                return (
                                                    <Tooltip title={item.label} aria-label={item.label}>
                                                        <IconButton onClick={(e) => handleViewClicked(e, item.path, rowId)} key={index}>
                                                            <Icon fontSize="small">{item.icon}</Icon>
                                                        </IconButton>
                                                    </Tooltip>
                                                )
                                            })
                                        }
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })
            }
            {
                props.emptyRows > 0 && (
                    <TableRow style={{ height: 53 * props.emptyRows }}>
                        <TableCell colSpan={props.columnDefs.length + 1}>
                        </TableCell>
                    </TableRow>
                )
            }
        </TableBody>
    )
}

export default GenericTableBody
