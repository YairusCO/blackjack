import React from 'react'
import { Grid } from '@mui/material'
import Table from './Table'
import InitialDeal from './InitialDeal'
import MainBtn from '../common/MainBtn'

const Game = ({ isInitialDeal, getDeal, newGame }) => {
  return (
    <div className="game">
      <MainBtn
        text={'Deal'}
        handleClick={() => {
          newGame()
          getDeal(!isInitialDeal)
        }}
      />
      <Grid container className="game-container">
        {isInitialDeal && <InitialDeal />}
        {!isInitialDeal && <Table />}
      </Grid>
    </div>
  )
}

export default Game
