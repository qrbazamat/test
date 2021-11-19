import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Col, Form, Input, Label, Row } from 'reactstrap'

function SignIn({showPassword, logPas}) {
    const [auth, setAuth] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()

    const showLocation = (e) => {
        e.preventDefault()
        showPassword(auth)
        setAuth({username: '',password: ''})
        history.replace('/dashboard')
    }


    const onChangeHandler = e => {
        const {name, value} = e.target
        const authChange = {...auth}
        authChange[name] = value
        setAuth(authChange)
    }

    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                height: '100vh',
                background: 'royalblue'
            }}
        >
            <Form
                style={{
                    width: '400px',
                    margin: 'auto',
                    backgroundColor: '#a1a1a1',
                    padding: '20px'
                }}
            >
                <Row
                    className='p-2'
                >
                    <Col md='4'>
                        <Label>username:</Label>
                    </Col>
                    <Col md='8'>
                        <Input
                            type='text'
                            placeholder='Your username'
                            value={auth.username}
                            name='username'
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </Col>
                </Row>
                <Row
                    className='p-2'
                >
                    <Col md='4'>
                        <Label>password:</Label>
                    </Col>
                    <Col md='8'>
                        <Input
                            type='password'
                            placeholder='Your password'
                            value={auth.password}
                            name='password'
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </Col>
                </Row>
                <Row
                    className='p-2'
                >
                    <Col
                        className='d-flex justify-content-center'
                    >
                        <Button
                            className='bg-success'
                            onClick={e => showLocation(e)}
                        >
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SignIn