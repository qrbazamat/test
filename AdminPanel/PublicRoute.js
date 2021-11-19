import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLogin } from '../utils'

function PublicRoute({ component: Component, restricted, ...rest }) {
    return (
        <Route {...rest} render={() => (
            isLogin() && restricted ?
                <Redirect to='/dashboard' />
                :
                <Component {...rest} />
        )} />
    )
}

export default PublicRoute