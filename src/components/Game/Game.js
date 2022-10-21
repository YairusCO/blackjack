import React, { useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material'
// import { dispatch } from '../../services/pubsub'
import Player from './Player'
import Dealer from './Dealer'
const Game = ({ bank }) => {
  // useEffect(() => {
  //   dispatch('Action name', {data: "AnyData"})
  // })
  return (
    <div classname="game">
      This is the Game page {bank}
      <Grid container classname="game-container">
        {true && <Dealer />}
        {true && <Player />}
      </Grid>
    </div>
  )
}

export default Game
