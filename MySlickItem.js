import React from 'react'
import { Col, Row } from 'reactstrap'

function MySlickItem({AppsIcons}) {
    return (
        <>
            <Row className='px-md-5 w-md-75 mx-auto'>
                {
                    AppsIcons.map((Icon, i) => (
                        <Col
                            className='col-3 col-md-2 col-landscape-6 my-2 scale-app'
                            key={Icon.appUrl + i}
                        >
                            <div
                                className='ratio ratio-1x1'
                                role='button'
                            >
                                <div
                                    style={{
                                        background: `url(${Icon.appUrl})`,
                                        backgroundSize: '90% 90%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center'
                                    }}
                                ></div>
                            </div>
                            <div className='text-center fw-normal text-white apps-title'>
                                {Icon.appTitle}
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default MySlickItem