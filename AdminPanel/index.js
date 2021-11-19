import React, { useState } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Navbar from './Navigation'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import SignIn from './SignIn'

function Index() {
    const [logPas, setLogPas] = useState({
        username: '',
        password: ''
    })

    const showPassword = (data) => {
        setLogPas(data)
        localStorage.setItem('log-pas', JSON.stringify(data))
        console.log(localStorage.getItem('log-pas'))
    }

    return (
        <BrowserRouter>
            <Navbar logPas={logPas} />
            <Switch>
                <PublicRoute
                    restricted={false}
                    component={Home}
                    path='/'
                    exact
                />
                <PublicRoute
                    restricted={true}
                    component={SignIn}
                    showPassword={showPassword}
                    logPas={logPas}
                    path='/signin'
                    exact
                />
                <PrivateRoute
                    component={Dashboard}
                    path='/dashboard'
                    showPassword={showPassword}
                    logPas={logPas}
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Index
