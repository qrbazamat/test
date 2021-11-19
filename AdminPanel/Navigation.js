import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { isLogin } from '../utils'

function Navigation({ logPas }) {
    const localStorageValue = JSON.parse(localStorage.getItem('log-pas'))
    return (
        <AppBar
            position='fixed'
            className='shadow'
        >
            <Toolbar variant='dense'>
                <NavLink to='/'>
                    <h3
                        className='text-white'
                    >
                        Azamat Qurbanov
                    </h3>
                </NavLink>
                <Grid container justifyContent='flex-end'>
                    {isLogin(logPas)||isLogin(localStorageValue) ? (
                        <NavLink to='/dashboard'>
                            <Button
                                variant='outlined'
                                style={{
                                    background: '#c1c1c1'
                                }}
                            >
                                Dashboard
                            </Button>
                        </NavLink>
                    ) : (
                        <NavLink to='/signin'>
                            <Button
                                variant='outlined'
                                style={{
                                    background: '#c1c1c1'
                                }}
                            >
                                Login
                            </Button>
                        </NavLink>
                    )
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation