import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Play from './icons/Play'

const Container = styled.div`
    &:hover {
        background-color: rgba(0,0,0, 0.9);
    }
    &:active {
        background-color: rgba(0,0,0, .8);
        border: 1vw solid white;
    }
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
    //@import url('https://fonts.googleapis.com/css?family=Courier+Prime:700&display=swap');
    //font-family: 'Courier Prime', monospace;
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

const PlayIcon = styled.svg`
    display: none;
    margin: auto;
    width: 5vw;
    height: 5vw;
    transition: 0.2s;
    ${Container}:hover & {
        display: flex;
        cursor: pointer;
    }
    ${Container}:active & {
        display: flex;
        cursor: pointer;
        width: calc(5vw * 0.8641);
        height: calc(5vw * 0.8641); 
    }
`


class DayDisplay extends Component {
    render() {
        const { mp3, dayOfWeek, dayOfMonth } = this.props.song
        return (
            <Container dayOfWeek={dayOfWeek}>
                <DayText>{dayOfMonth}</DayText>
                <PlayIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
                    <Play />
                </PlayIcon>
            </Container>
        )
    }
}

export default DayDisplay 