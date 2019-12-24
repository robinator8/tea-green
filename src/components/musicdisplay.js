import React, { Component } from 'react'
import { fullSplit } from '../utils/parsing'
import YearDisplay from './yeardisplay'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%
`

// songs: [
//     {
//         date: '2019-12-14T00:00:00.000Z'
//         mp3: 'window.com/song.mp3
//     },
//     ...
// ]
class MusicDisplay extends Component {
    render() {
        const { songs } = this.props
        const data = fullSplit(songs)
        return (
            <Container>
                {data.map(({ year, months }) => <YearDisplay year={year} months={months} />)}
            </Container>
        )        
    }
}

export default MusicDisplay