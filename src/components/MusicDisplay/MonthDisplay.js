import React, { Component } from 'react'
import WeekDisplay from './WeekDisplay'
import styled from 'styled-components'

const Header = styled.h3`
    font-size: 10vw;
    padding: 6vw;
    margin: 0vw;
    background-color: rgba(0,0,0,0.9);
    color: white;
    cursor: default;
`


class MonthDisplay extends Component {
    render() {
        const { month, weeks } = this.props
        return (
            <div>
                <Header>{month}</Header>
                {weeks.map(((songs, index) => <WeekDisplay songs={songs} key={month+index} />))}
            </div>
        )
    }
}

export default MonthDisplay