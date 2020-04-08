import React from 'react'
import CakeBuildPage from '../CakeBuildPage/CakeBuildPage'
import {Redirect, Route} from 'react-router-dom'

export default function PrivateRoute(props) {
    return <Route {...props} render={(routerProps) => {
        return localStorage.token ? <CakeBuildPage {...routerProps} /> : <Redirect to="/" />
    }} />
 
}
