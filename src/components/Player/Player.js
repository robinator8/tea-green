import React from 'react'
import PlayerBackend from './PlayerBackend'
import PlayerUI from './PlayerUI'

const Player = ({ playlist }) => (
  <PlayerBackend UI={PlayerUI} playlist={playlist} />
)

export default Player