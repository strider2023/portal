import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TablePagination, TableContainer, Table } from '@material-ui/core';

import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';
import GenericTableBody from './GenericTableBody';
import TableGenericDeleteDialog from './TableGenericDeleteDialog';
import './table.scss';

let rows = [];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

function AppTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(props.tableKey);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openTableDeletDialog, setOpenTableDeletDialog] = React.useState(false);

    if (props.tableData) {
        rows = props.tableData;
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDeleteDialogOpen = (path) => {
        console.log(path);
        setOpenTableDeletDialog(true);
    };

    const handleDeleteDialogClose = () => {
        setOpenTableDeletDialog(false);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableToolbar tableTitle={props.tableTitle} showFilters={props.showFilters} />
                {
                    (rows.length > 0) ? (
                        <>
                            <TableContainer>
                                <Table className={classes.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table" >
                                    <TableHeader
                                        classes={classes}
                                        order={order}
                                        orderBy={orderBy}
                                        onRequestSort={handleRequestSort}
                                        columnDefs={props.columnDefs} />
                                    <GenericTableBody
                                        data={rows}
                                        emptyRows={emptyRows}
                                        columnDefs={props.columnDefs}
                                        page={page}
                                        rowsPerPage={rowsPerPage}
                                        optionsConfig={props.optionsConfig}
                                        tableKey={props.tableKey}
                                        order={order}
                                        orderBy={orderBy}
                                        handleDeleteOpen={handleDeleteDialogOpen} />
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 15, 20]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </>
                    ) : (
                        <div className="table-no-data">
                            <img src={"../images/nodata.svg"} className="table-no-data-image" />
                            <p className="table-no-data-label">No Data Found</p>
                        </div>
                    )
                }
            </Paper>
            <TableGenericDeleteDialog open={openTableDeletDialog} handleClose={handleDeleteDialogClose} title={props.deleteDialogTitle} details={props.deleteDialogDesc} />
        </div>
    );
}

export default AppTable
