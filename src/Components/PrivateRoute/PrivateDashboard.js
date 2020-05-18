import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import {Redirect, Route} from 'react-router-dom'

export default function PrivateDashboard(props) {
    return <Route {...props} render={(routerProps) => {
        return localStorage.token ? <Dashboard {...routerProps} /> : <Redirect to="/" />
    }} />
 
}
