import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './CSS/MyAppsStyle.css'
import IconCalcCircle from './App-Icons/calc_circle.svg'
import IconCalcSquare from './App-Icons/calc_square.png'
import IconClockDigital from './App-Icons/clock-digital.png'
import IconClock from './App-Icons/clock.png'
import IconCurrency_1 from './App-Icons/currency-1.png'
import IconCurrency_2 from './App-Icons/currency-2.png'
import IconCurrency_3 from './App-Icons/currency-3.png'
import IconPuzzle_9_r from './App-Icons/puzzle_9_rounded.png'
import IconPuzzle_9 from './App-Icons/puzzle_9.png'
import IconPuzzle_16 from './App-Icons/puzzle_16.png'
import IconTemperatureConverter from './App-Icons/temperature-converter.png'
import IconTicTacToeCircle from './App-Icons/tic-tac-toe-circle.png'
import IconTicTacToeSquare from './App-Icons/tic-tac-toe-square.png'
import IconTicTacToeTransparent from './App-Icons/tic-tac-toe-transparent.png'
import IconTodo_1 from './App-Icons/todo_one.png'
import IconTodo_2 from './App-Icons/todo_two.png'
import IconTodo_3 from './App-Icons/todo_three.png'
import IconTodo_4 from './App-Icons/todo_four.png'

const AppsIcons = [
    {
        appUrl: IconCalcCircle,
        appTitle: 'Calculator '
    },
    {
        appUrl: IconCalcSquare,
        appTitle: 'Calculator apps'
    },
    {
        appUrl: IconClockDigital,
        appTitle: 'Digital clock'
    },
    {
        appUrl: IconClock,
        appTitle: 'Clock'
    },
    {
        appUrl: IconCurrency_1,
        appTitle: 'Currency 1'
    },
    {
        appUrl: IconCurrency_2,
        appTitle: 'Currency 2'
    },
    {
        appUrl: IconCurrency_3,
        appTitle: 'Currency 3'
    },
    {
        appUrl: IconPuzzle_9_r,
        appTitle: 'Puzzle 9'
    },
    {
        appUrl: IconPuzzle_9,
        appTitle: 'Puzzle 9'
    },
    {
        appUrl: IconPuzzle_16,
        appTitle: 'Puzzle 16'
    },
    {
        appUrl: IconTemperatureConverter,
        appTitle: 'Converter'
    },
    {
        appUrl: IconTicTacToeCircle,
        appTitle: 'Tic Tac Toe'
    },
    {
        appUrl: IconTicTacToeSquare,
        appTitle: 'Tic Tac Toe'
    },
    {
        appUrl: IconTicTacToeTransparent,
        appTitle: 'Tic Tac Toe'
    },
    {
        appUrl: IconTodo_1,
        appTitle: 'Todo 1'
    },
    {
        appUrl: IconTodo_2,
        appTitle: 'Todo 2'
    },
    {
        appUrl: IconTodo_3,
        appTitle: 'Todo 3'
    },
    {
        appUrl: IconTodo_4,
        appTitle: 'Todo 4'
    },
    {
        appUrl: IconCalcCircle,
        appTitle: 'Calculator '
    },
    {
        appUrl: IconCalcSquare,
        appTitle: 'Calculator apps'
    },
    {
        appUrl: IconClockDigital,
        appTitle: 'Digital clock'
    },
    {
        appUrl: IconClock,
        appTitle: 'Clock'
    },
    {
        appUrl: IconCurrency_1,
        appTitle: 'Currency 1'
    },
    {
        appUrl: IconCurrency_2,
        appTitle: 'Currency 2'
    },
    {
        appUrl: IconCurrency_3,
        appTitle: 'Currency 3'
    },
]

function MyAppsContainer() {
    return (
        <div className='my-apps-container d-flex align-items-center'>
            <Container className='animate-apps'>
                <Row className='px-md-5 w-md-70 mx-auto'>
                    {
                        AppsIcons.map((Icon, i) => (
                            <Col
                                className='col-3 col-md-my-5x12 my-2 scale-app'
                                key={Icon.appUrl+i}
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
            </Container>
        </div>
    )
}

export default MyAppsContainer