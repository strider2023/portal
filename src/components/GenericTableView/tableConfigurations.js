import { gql } from '@apollo/client';

const orderTable = {
    pageTitle: process.env.REACT_APP_NAME,
    tableTitle: 'My Orders',
    dataSource: '',
    showFilters: true,
    showAdd: true,
    deleteMultiple: false,
    addLabel: 'New Order',
    addPath: 'dialog::CreationTypeDialog',
    tableKey: 'orderNumber',
    deleteDialogTitle: 'Delete Order',
    deleteDialogDesc: 'Are you sure you want to delete this order?',
    columns: [
        { id: 'orderNumber', label: 'Order Number' },
        { id: 'orderDate', label: 'Date' },
        { id: 'vendorName', label: 'Vendor Name' },
        { id: 'totalAmount', label: 'Amount' },
        { id: 'orderStatus', label: 'Status' },
    ],
    optionsConfig: [
        { path: '/app/order/${orderNumber}', label: 'View', icon: 'visibility' },
        { path: '/app/order/${orderNumber}', label: 'Edit', icon: 'edit' },
        { path: 'delete::/app/order/${orderNumber}', label: 'Delete', icon: 'delete' },
    ]
};

const businessTable = {
    pageTitle: process.env.REACT_APP_NAME,
    tableTitle: 'My Businesses',
    dataSource: '',
    showFilters: false,
    showAdd: true,
    deleteMultiple: false,
    addLabel: 'Add Business',
    addPath: '/app/business',
    tableKey: 'businessId',
    deleteDialogTitle: 'Delete Business',
    deleteDialogDesc: 'Are you sure you want to delete this business?',
    columns: [
        { id: 'businessId', label: 'Business Id' },
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone Number' },
        { id: 'pan', label: 'PAN' }
    ],
    optionsConfig: [
        { path: '/app/business/${businessId}', label: 'View', icon: 'visibility' },
        { path: '/app/business/${businessId}/edit', label: 'Edit', icon: 'edit' },
        { path: 'delete::/app/business/${businessId}', label: 'Delete', icon: 'delete' },
    ]
};

const userTable = {
    pageTitle: process.env.REACT_APP_NAME,
    tableTitle: 'My Users',
    dataSource: '',
    showFilters: false,
    showAdd: true,
    deleteMultiple: false,
    addLabel: 'Add User',
    addPath: '/app/user',
    tableKey: 'email',
    deleteDialogTitle: 'Delete User',
    deleteDialogDesc: 'Are you sure you want to delete this user?',
    columns: [
        { id: 'firstName', label: 'First Name' },
        { id: 'lastName', label: 'Last Name' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone Number' }
    ],
    optionsConfig: [
        { path: '/app/user/${email}', label: 'View', icon: 'visibility' },
        { path: '/app/user/${email}/edit', label: 'Edit', icon: 'edit' },
        { path: 'delete::/app/user/${email}', label: 'Delete', icon: 'delete' },
    ]
};

const rulesTable = {
    pageTitle: process.env.REACT_APP_NAME,
    tableTitle: 'My Automation Rules',
    dataSource: '',
    showFilters: false,
    showAdd: true,
    deleteMultiple: false,
    addLabel: 'Add Rule',
    addPath: '/',
    tableKey: 'name',
    deleteDialogTitle: 'Delete Rule',
    deleteDialogDesc: 'Are you sure you want to delete this rule?',
    columns: [
        { id: 'name', label: 'Name' },
        { id: 'ruleType', label: 'Rule For' },
        { id: 'status', label: 'Status' }
    ],
    optionsConfig: [
        { path: '/app/order/${orderNumber}', label: 'View', icon: 'visibility' },
        { path: '/app/order/${orderNumber}', label: 'Edit', icon: 'edit' },
        { path: 'delete::/app/order/${orderNumber}', label: 'Delete', icon: 'delete' },
    ]
};

export const getPageConfig = (type) => {
    switch (type) {
        case 'order':
            return orderTable;
        case 'business':
            return businessTable;
        case 'rules':
            return rulesTable;
        case 'users':
            return userTable;
        default:
            return null;
    }
}