import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import GenericTableView from '../components/GenericTableView';
import ManageBusiness from '../pages/ManageBusiness';
import BusinessDetails from '../pages/BusinessDetails';
import ManageUser from '../pages/ManageUser';
import UserDetails from '../pages/UserDetails';

function AppRoutes() {

    return (
        <Router basename="/">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/app">
                    <Dashboard />
                </Route>
                <Route exact path={`/app/orders`}>
                    <GenericTableView type="order" />
                </Route>
                <Route exact path={`/app/businesses`}>
                    <GenericTableView type="business" />
                </Route>
                <Route exact path={`/app/business`}>
                    <ManageBusiness isUpdate={false} />
                </Route>
                <Route exact path={`/app/business/:businessId/edit`}>
                    <ManageBusiness isUpdate={true} />
                </Route>
                <Route exact path={`/app/business/:businessId`}>
                    <BusinessDetails />
                </Route>
                <Route exact path={`/app/rules`}>
                    <GenericTableView type="rules" />
                </Route>
                <Route exact path={`/app/users`}>
                    <GenericTableView type="users" />
                </Route>
                <Route exact path={`/app/user`}>
                    <ManageUser isUpdate={false} />
                </Route>
                <Route exact path={`/app/user/:userId/edit`}>
                    <ManageUser isUpdate={true} />
                </Route>
                <Route exact path={`/app/user/:userId`}>
                    <UserDetails />
                </Route>
                {/* <Route exact path={`/app/order/create/:type`}>
                    <ManageOrders />
                </Route>
                <Route exact path={`/app/order/:orderId`}>
                    <OrderDetails />
                </Route>
                 */}
                <Route exact path={`/app/profile`}>
                    <Profile />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes;
