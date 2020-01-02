import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import * as Icons from '../Icons'
import { controls } from '../Player/PlayerBackend'

const Container = styled.div`
    transition: 0.2s;
    cursor: pointer;
    display: flex;
    width: 100%;
    :before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        padding-bottom: 100%;
    }
    ${({ dayOfWeek }) => (
        css`grid-area: ${dayOfWeek}`
    )}
`

const DayText = styled.p`
    font-size: 5vw;
    margin: auto;
    transition: 0.2s;
    ${Container}:hover & {
        display: none;
    }
    ${Container}:active & {
        display: none;
    }
`

const IconCont1 = styled.div`
    padding: 0vw;
    transition: 0.2s;
    width: 100%;
    display: none;
    &:active {
        padding: 1vw 0;
    }
    ${Container}:hover & {
        display: flex;
        cursor: pointer;
    }
    ${Container}:active & {
        display: flex;
        cursor: pointer;
    }
`

const IconCont2 = styled.div`
    background-color: rgba(0,0,0,0.9);
    transition: 0.2s;
    width: 100%;
    display: flex;
    ${IconCont1}:active & {
        background-color: rgba(0,0,0,0.8);
    }
`

const IconHolder = styled(Icons.Icon)`
    font-size: 5vw;
    color: white;
    display: none;
    margin: auto;
    transition: 0.2s;
    ${Container}:hover & {
        display: flex;
        cursor: pointer;
    }
    ${IconCont1}:active & {
        display: flex;
        cursor: pointer;
        font-size: calc(5vw * 0.8641);
    }
`

const PlayIcon = ({ song }) => (
    <IconCont1 onClick={() => controls().playSong(song)}>
        <IconCont2>
            <IconHolder>{Icons.Play}</IconHolder>
        </IconCont2>
    </IconCont1>
)

const AddIcon = ({ song }) => (
    <IconCont1 onClick={() => controls().addToQueue(song)}>
        <IconCont2>
            <IconHolder>{Icons.Add}</IconHolder>
        </IconCont2>
    </IconCont1> 
)

class DayDisplay extends Component {
    render() {
        const { dayOfWeek, dayOfMonth } = this.props.song
        return (
            <Container dayOfWeek={dayOfWeek}>
                <DayText>{dayOfMonth}</DayText>
                <PlayIcon song={this.props.song} />
                <AddIcon song={this.props.song} />
            </Container>
        )
    }
}

export default DayDisplay 