import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';

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
                <Route exact path="/app">
                    <Dashboard />
                </Route>
                {/* <Route exact path={`/app/orders`}>
                    <TableView type="order" />
                </Route>
                <Route exact path={`/app/businesses`}>
                    <TableView type="business" />
                </Route>
                <Route exact path={`/app/rules`}>
                    <TableView type="rules" />
                </Route>
                <Route exact path={`/app/users`}>
                    <TableView type="users" />
                </Route>
                <Route exact path={`/app/order/create/:type`}>
                    <ManageOrders />
                </Route>
                <Route exact path={`/app/order/:orderId`}>
                    <OrderDetails />
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
                <Route exact path={`/app/user`}>
                    <ManageUsers isUpdate={false} />
                </Route>
                <Route exact path={`/app/user/:userId/edit`}>
                    <ManageUsers isUpdate={true} />
                </Route>
                <Route exact path={`/app/user/:userId`}>
                    <UserDetails />
                </Route>
                <Route exact path={`/app/profile`}>
                    <Profile />
                </Route> */}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes;
