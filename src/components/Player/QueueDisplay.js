import React  from 'react'
import styled from 'styled-components'
import * as Icons from '../Icons'

const Container = styled.div`
    background-color: rgba(0,0,0,.9);
    position: fixed;
    left: 6vmin;
    right: 6vmin;
    top: 6vmin;
    bottom: 18vmin;
    border-radius: 3vmin;
    z-index: 3;
    boxShadow: 0px 5px 1px 5px #AAA;
    overflow: scroll;

`

const SongTitle = styled.p`
    font-size: 4vmin;
    color: black;
    margin: auto;
    padding-left: 3vmin;
`

const SongTitleCont = styled.div`
    display: flex;
    background-color: white;
    margin: 3vmin 8vmin;
    border-radius: 3vmin;
`

const Title = styled.h3`
    color: white;
    text-align: center;
    padding: 3vmin 0;
    font-size: 5vmin;
    cursor: default;
`

const ExitIcon = styled(Icons.Icon)`
    color: white;
    position: absolute;
    top: 3vmin;
    right: 3vmin;
    font-size: 3vmin;
    &:hover {
        cursor: pointer;
        color: rgba(255,255,255,0.75)
    }
    transition: 0.2s;
`

const Button = styled.button`
  background-color: white;
  color: rgba(0,0,0,0.9);
  font-size: 3vmin;
  margin: 3vmin auto;
  padding: 1vmin 3vmin;
  border: 2px solid #b5e0ad;
  border-radius: 1vmin;
  transition: 0.2s;
  &:hover {
      background-color: #b5e0ad;
  }
  &:active {
      background-color: rgb(171,214,163);
  }
`

const QueueDisplay = ({ active, removeFromQueue, queue, onExit }) => {
    if (!active) {
        return <div />
    }
    return <Container>
        <ExitIcon onClick={() => onExit()}>{Icons.Exit}</ExitIcon>
        <Title>Queue</Title>
        {queue.length ? 
        queue.map((val, index) => (
            <SongTitleCont onClick={() => removeFromQueue(index)}>
                <SongTitle>{val.title}</SongTitle>
                <Button>Remove</Button>
            </SongTitleCont>
        )) : 
        <SongTitleCont>
            <SongTitle>Queue Empty</SongTitle>
        </SongTitleCont>
        }
    </Container>
}

export default QueueDisplay