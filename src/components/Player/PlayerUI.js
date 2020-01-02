import React, { Component } from 'react'
import styled from 'styled-components'
import * as Icons from '../Icons'
import Slider from './Slider'
import QueueDisplay from './QueueDisplay'

const Container = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.95);
    boxShadow: '5px 5px -5px #A00'
`

const Controls = styled.div`
    display: flex;
`

const MainControls = styled.div`
    margin: auto;
    display: flex;
`

const IconContainer = styled.div`
    height: ${({ large, medium, small }) => { 
        if (large) return '11vmin'
        if (medium) return '8vmin'
        if (small) return '4.5vmin'
    }};
    width: ${({ large, medium, small }) => { 
        if (large) return '11vmin'
        if (medium) return '8vmin'
        if (small) return '4.5vmin'
    }};
    margin: auto;
    display: flex;
    &:hover {
        cursor: pointer;
    }
    &:active {
        cursor: pointer;
    }
`

const Icon = styled(Icons.Icon)`
    font-size: ${({ large, medium, small }) => { 
        if (large) return '5vmin'
        if (medium) return '4vmin'
        if (small) return '2.5vmin'
    }};

    color: ${({ active }) => 
        active ? '#b5e0ad' : 'white'
    };
    margin: auto;
    transition: 0.2s;
    ${IconContainer}:hover & {
        font-size: ${({ large, medium, small }) => { 
            if (large) return '6vmin'
            if (medium) return '4.75vmin'
            if (small) return '3vmin'
        }};
    }
    ${IconContainer}:active & {
    font-size: ${({ large, medium, small }) => { 
            if (large) return '5vmin'
            if (medium) return '4vmin'
            if (small) return '2.5vmin'
        }};
    }
`

const TitleCont = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex
`

const TitleWrapper = styled.div`
    margin: auto;
    padding-left: 5vmin;
`

const SongTitle = styled.h2`
    display: block;
    color: white;
    margin: auto;
    font-size: 3vmin;
    padding-bottom: 0.5vmin;
    font-weight: 500;
    font-family: 'Heebo', sans-serif;
`

const ArtistTitle = styled.h3`
    display: block;
    color: rgba(255,255,255,0.85);
    margin: auto;
    font-size: 1.5vmin;
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Heebo', sans-serif;
`

class PlayerUI extends Component {
    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
        this.toggleQueue = this.toggleQueue.bind(this)
        this.state = {
            showQueue: false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          100 
        )
    }

    tick() {
        if (this.props.data.playing) {
            this.setState({})
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    toggleQueue() {
        this.setState((prevState, props) => ({
            showQueue: !prevState.showQueue
        }))
    }

    sanitize(input) {
        if (input.isNaN) return 0
        return input
    }

    render() {
        const { data, player } = this.props
        // console.log(data)
        return (
            <Container>
                <Slider 
                    values={(player) ? [(player.seek() / player.duration())] : [0]} 
                    onChange={(val) => (player) ? player.seek(val * (player.duration())) : null}
                    songLength={((player) ? player.duration() : 0)}
                />
                <QueueDisplay 
                    active={this.state.showQueue} 
                    queue={data.queue}
                    removeFromQueue={data.funcs.removeFromQueue}
                    onExit={() => this.toggleQueue()}
                />
                <Controls>
                    <TitleCont>
                        <TitleWrapper>
                            <SongTitle>{data.currentSong.title}</SongTitle>
                            <ArtistTitle>{data.currentSong.artist}</ArtistTitle>
                        </TitleWrapper>
                    </TitleCont>
                    <MainControls>
                        <IconContainer small onClick={() => data.funcs.toggleShuffle()}>
                            <Icon small active={data.shuffle}>{Icons.Shuffle}</Icon>
                        </IconContainer>
                        <IconContainer medium onClick={() => data.funcs.skipBackward()}>
                            <Icon medium>{Icons.Backward}</Icon>
                        </IconContainer>
                        <IconContainer large onClick={() => data.funcs.togglePlay()}>
                            <Icon large>{!data.playing && Icons.Play}{data.playing && Icons.Pause}</Icon>
                        </IconContainer> 
                        <IconContainer medium onClick={() => data.funcs.skipForward()}>
                            <Icon medium>{Icons.Forward}</Icon>
                        </IconContainer>
                        <IconContainer small onClick={() => this.toggleQueue()}>
                            <Icon small active={this.state.showQueue}>{Icons.Queue}</Icon>
                        </IconContainer>
                    </MainControls>
                </Controls>
            </Container>
            
        )
    }
}

export default PlayerUI