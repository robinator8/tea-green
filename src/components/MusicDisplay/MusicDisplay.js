import React, { Component } from 'react'
import { fullSplit } from '../../utils/parsing'
import YearDisplay from './YearDisplay'
import styled from 'styled-components'
import Player from '../Player/Player'

const Container = styled.div`
    width: 100%;
    padding-bottom: 11.45vmin;
`

// songs: [
//     {
//         date: '2019-12-14T00:00:00.000Z'
//         src: 'window.com/song.mp3
//     },
//     ...
// ]
class MusicDisplay extends Component {
    render() {
        const { songs } = this.props
        const data = fullSplit(songs)
        return (
            <Container>
                {data.map(({ year, months }) => <YearDisplay year={year} months={months} key={year} />)}
                <Player playlist={songs} />   
            </Container>
        )        
    }
}

export default MusicDisplay