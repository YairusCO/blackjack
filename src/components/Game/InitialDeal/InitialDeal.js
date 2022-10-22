import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import MainBtn from '../../common/MainBtn'
import black from '../../../assets/black100chip.png'
import green from '../../../assets/green20chip.png'
import red from '../../../assets/red50chip.png'
import gold from '../../../assets/gold-chip.png'

const InitialDeal = ({ playerBank, playerDealCount, addMoney }) => {
  return (
    <Grid container className="initial-deal">
      <Grid item container className="initial-deal-top">
        <Grid item container className="main-btn-container">
          <MainBtn text={`bank: ${playerBank}$`} classname={'bank'} />
          <MainBtn
            text="All in"
            handleClick={() => addMoney(playerBank)}
            classname={'all-in'}
          />
        </Grid>
        <Grid>
          <Button className="count-btn">
            <Typography className="count-txt">{playerDealCount}</Typography>
            <img className="count-chip" src={gold} alt="gold" />
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Button onClick={() => addMoney(20)}>
          <img className="chip" src={green} alt="green" />
        </Button>
        <Button>
          <img
            onClick={() => addMoney(50)}
            className="chip"
            src={red}
            alt="red"
          />
        </Button>
        <Button>
          <img
            onClick={() => addMoney(100)}
            className="chip"
            src={black}
            alt="black"
          />
        </Button>
      </Grid>
    </Grid>
  )
}

export default InitialDeal
