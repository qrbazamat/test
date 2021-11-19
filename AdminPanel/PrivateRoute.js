import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLogin } from '../utils'

function PrivateRoute({ component: Component, ...rest }) {
    const localStorageValue = JSON.parse(localStorage.getItem('log-pas'))
    return (
        <Route {...rest} render={() => (
            isLogin(rest.logPas)||isLogin(localStorageValue) ?
                <Component {...rest} />
                :
                <Redirect to='/signin' />
        )} />
    )
}

export default PrivateRoute