import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Users from './Users.json'
import './Dashboard_module.css'
import {
    DashboardOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CalendarTodayOutlined,
    BarChartOutlined,
    AttachmentOutlined,
    PeopleOutline,
    PowerSettingsNew,
    Settings,
    Edit,
    Delete
} from '@material-ui/icons'
import {
    Table,
    Modal,
    Input,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col
} from 'reactstrap';

const modalData = {
    fullName: '',
    email: '',
    course: '',
    phone: '',
    created: ''
}

function Dashboard({ showPassword }) {
    const [users, setUsers] = useState(Users)
    const [modalUsers, setModalUsers] = useState(modalData)
    const [userId, setUserId] = useState(0)
    const [show, setShow] = useState(false)
    const [activeBtn, setActiveBtn] = useState(['active-icon-btn','','','',''])

    const history = useHistory()

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        setShow(true)
        setUserId(id)
        setModalUsers(users[id])
    }

    const clickHandlerActiveBtn = k => {
        const active = ['','','','','']
        active[k] = 'active-icon-btn'
        setActiveBtn(active)
    }

    const onChangeModalData = e => {
        const modalData = { ...modalUsers }
        const { name, value } = e.target

        modalData[name] = value
        setModalUsers(modalData)
    }

    const updateData = () => {
        const allUser = [...users]
        allUser[userId] = modalUsers
        setUsers(allUser)
        setShow(false)
    }

    const deleteData = i => {
        const allUser = [...users.filter((value, index) => index !== i)]
        setUsers(allUser)
    }

    const exitToHome = () => {
        history.replace('/')
    }

    const quitFromDash = () => {
        showPassword({ username: '', password: '' })
        history.replace('/signin')
    }

    return (
        <div
            className='text-muted d-flex justify-content-center align-items-center dashboard pt-5'
            style={{
                minHeight: '100vh',
                backgroundColor: '#1a2b3c'
            }}
        >
            <AppBar
                position='fixed'
                className='shadow'
            >
                <Toolbar className='d-flex justify-content-between'>
                    <IconButton onClick={() => exitToHome()}>
                        <HomeOutlined style={{
                            fontSize: '50px',
                            color: 'aliceblue'
                        }} />
                    </IconButton>

                    <h2
                        className='d-flex align-items-center'
                    >
                        <DashboardOutlined
                            style={{
                                fontSize: '40px',
                                marginRight: '10px'
                            }}
                        /> Dashboard
                    </h2>

                    <IconButton
                        onClick={quitFromDash}
                    >
                        <PowerSettingsNew
                            className='text-danger'
                            style={{ fontSize: '40px' }}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div
                className='leftbar shadow p-3 d-flex justify-content-center flex-column' style={{ marginTop: '70px' }}>
                <IconButton onClick={() => clickHandlerActiveBtn(0)} className={activeBtn[0]}>
                    <PeopleOutline />
                </IconButton>
                <IconButton onClick={() => clickHandlerActiveBtn(1)} className={activeBtn[1]}>
                    <CalendarTodayOutlined />
                </IconButton>
                <IconButton onClick={() => clickHandlerActiveBtn(2)} className={activeBtn[2]}>
                    <ShoppingCartOutlined />
                </IconButton>
                <IconButton onClick={() => clickHandlerActiveBtn(3)} className={activeBtn[3]}>
                    <BarChartOutlined />
                </IconButton>
                <IconButton onClick={() => clickHandlerActiveBtn(4)} className={activeBtn[4]}>
                    <AttachmentOutlined />
                </IconButton>
                <IconButton onClick={() => clickHandlerActiveBtn(5)} className={activeBtn[5]}>
                    <Settings />
                </IconButton>
            </div>

            <div className='users' style={{ marginTop: '90px' }}>
                <h2 className='text-primary text-center'>
                    Users Table
                </h2>
                <Table
                    striped
                    dark
                    className='rounded-table shadow'
                >
                    <thead>
                        <tr className='text-info'>
                            <th>#</th>
                            <th>FISh</th>
                            <th>Email</th>
                            <th>Kurs</th>
                            <th>Telefon</th>
                            <th>Date</th>
                            <th>U.</th>
                            <th>D.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.course}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.created}</td>
                                    <td
                                        className='text-center'
                                    >
                                        <IconButton
                                            onClick={() => handleShow(idx)}
                                        >
                                            <Edit
                                                className='text-success'
                                            />
                                        </IconButton>
                                    </td>
                                    <td
                                        className='text-center'
                                    >
                                        <IconButton
                                            onClick={() => deleteData(idx)}
                                        >
                                            <Delete
                                                className='text-danger'
                                            />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

                <div

                >
                    <Modal
                        isOpen={show}
                        backdrop="static"
                        keyboard={false}
                        style={{
                            top: '50vh',
                            transform: 'translateY(-50%)'
                        }}
                        className='shadow'
                    >
                        <ModalHeader tag='h3'>
                            Ma'lumotlarni tahrirlash
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md='12'>
                                    <Input
                                        name='fullName'
                                        value={modalUsers.fullName}
                                        onChange={e => onChangeModalData(e)}
                                    />
                                </Col>
                                <Col md='12'>
                                    <Input
                                        name='email'
                                        value={modalUsers.email}
                                        onChange={e => onChangeModalData(e)}
                                    />
                                </Col>
                                <Col md='12'>
                                    <Input
                                        name='course'
                                        value={modalUsers.course}
                                        onChange={e => onChangeModalData(e)}
                                    />
                                </Col>
                                <Col md='12'>
                                    <Input
                                        name='phone'
                                        value={modalUsers.phone}
                                        onChange={e => onChangeModalData(e)}
                                    />
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                className='bg-primary'
                                onClick={updateData}
                            >
                                Update
                            </Button>
                            <Button
                                className='bg-danger'
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Dashboard