import React from 'react'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';
import Typography from '@material-ui/core/Typography';

import './styles/dashboard.scss'

const data = [
    {
        name: 'Jan 2021', paid: 4000, pending: 2400, amt: 2400,
    },
    {
        name: 'Feb 2021', paid: 3000, pending: 1398, amt: 2210,
    },
    {
        name: 'Mar 2021', paid: 2000, pending: 9800, amt: 2290,
    },
    {
        name: 'Apr 2021', paid: 2780, pending: 3908, amt: 2000,
    },
    {
        name: 'May 2021', paid: 1890, pending: 4800, amt: 2181,
    },
    {
        name: 'Jun 2021', paid: 2390, pending: 3800, amt: 2500,
    },
    {
        name: 'Jul 2021', paid: 3490, pending: 4300, amt: 2100,
    },
];

function Charts() {
    return (
        <div className="dashboard-chart-card">
            <Typography variant="h5" component="h2">Purchase Report</Typography>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 20, bottom: 30,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pending" fill="#8884d8" />
                    <Bar dataKey="paid" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts
