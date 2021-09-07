import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import Fab from '@material-ui/core/Fab';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import AppLayout from '../../common/layouts/AppLayout';
import AppTable from './components/Table';
import { getPageConfig } from './tableConfigurations';
import CreationTypeDialog from '../../modals/CreationTypeDialog';
import Notiflix from "notiflix";

import './tableView.scss';

const getDialogComponent = (name, { open, handleClose, handleDismiss }) => {
    switch (name) {
        case 'CreationTypeDialog':
            return (<CreationTypeDialog open={open} handleClose={handleClose} handleDismiss={handleDismiss} />);
    }
}

function GenericTableView(props) {
    const history = useHistory();
    const pageConfig = getPageConfig(props.type);

    const [open, setOpen] = React.useState(false);
    const [tableType, setTableType] = React.useState('');
    const [tableData, setTableData] = React.useState([]);
    const [tableLoading, setTableLoading] = React.useState(false);

    useEffect(() => {
        if (tableType !== props.type) {
            setTableType(props.type);
            setTableLoading(true);
            setTableData([]);
            // pageConfig.dataSource({}, (isError, resp) => {
            //     if (!isError) {
            //         setTableData(resp.result);
            //     }
            // });
            setTableLoading(false);
        } else {
            console.log('same', pageConfig);
        }
    }, [props]);

    const handleNewItemCreation = (event) => {
        if (pageConfig.addPath.startsWith("dialog::")) {
            setOpen(true);
        } else {
            history.push(pageConfig.addPath)
        }
        event.preventDefault();
    }

    const handleClose = () => {
        setOpen(false);
        // Refresh table data
        setTableLoading(true);
        setTableData([]);
        // pageConfig.dataSource({}, (resp) => {
        //     setTableData(resp.result);
        // });
        setTableLoading(false);
    };

    const handleDismiss = () => {
        setOpen(false);
    };

    const handleUpdate = () => {

    };

    return (
        <AppLayout headerTitle={pageConfig.pageTitle} showHamburger={true}>
            <AppTable
                tableTitle={pageConfig.tableTitle}
                deleteMultiple={pageConfig.deleteMultiple}
                showFilters={pageConfig.showFilters}
                tableKey={pageConfig.tableKey}
                columnDefs={pageConfig.columns}
                tableData={tableData}
                optionsConfig={pageConfig.optionsConfig}
                deleteDialogTitle={pageConfig.deleteDialogTitle}
                deleteDialogDesc={pageConfig.deleteDialogDesc}
                onUpdateCallback={handleUpdate} />
            {
                pageConfig.showAdd ? (
                    <Fab variant="extended" className="add-button-style" onClick={handleNewItemCreation}>
                        <AddCircleIcon />
                        {pageConfig.addLabel}
                    </Fab>
                ) : null
            }
            {
                getDialogComponent(pageConfig.addPath.split('::')[1], { open, handleClose, handleDismiss })
            }
        </AppLayout>
    )
}

export default GenericTableView
