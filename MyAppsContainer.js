import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './CSS/MyAppsStyle.css'
import MyReactSlick from './MyReactSlick'

function MyAppsContainer() {
    return (
        <div className='my-apps-container d-flex align-items-center'>
            <Container className='animate-apps'>
                <MyReactSlick />
            </Container>
        </div>
    )
}

export default MyAppsContainer