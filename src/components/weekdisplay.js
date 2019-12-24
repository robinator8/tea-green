import React, { Component } from 'react'
import DayDisplay from './daydisplay'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    justify-items: stretch;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas: "Sun Mon Tue Wed Thu Fri Sat"
`

class WeekDisplay extends Component {
    render() {
        const { songs } = this.props
        return (
            <Container>
                {songs.map((song => <DayDisplay song={song} />))}
            </Container>
        )
    }
}

export default WeekDisplay 