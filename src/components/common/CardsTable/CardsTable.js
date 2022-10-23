import React from 'react'
import { Grid } from '@mui/material'
import MainBtn from '../MainBtn'
import { getCards } from './const'
import { ReactComponent as EmptyCard } from '../../../assets/EmptyCard.svg'

const CardsTable = ({ isPlayer, amount, cards, hit, stand, isHid }) => {
  return (
    <Grid container className="cards-table">
      <Grid>
        <Grid>
          <Grid className="card-title">{isPlayer ? 'player' : 'dealer'}</Grid>
          {isPlayer && (
            <Grid className="card-table-btn">
              <MainBtn
                text={'hit'}
                handleClick={() => {
                  hit()
                }}
              />
              <MainBtn
                text={'stand'}
                handleClick={() => {
                  stand()
                }}
              />
            </Grid>
          )}
        </Grid>
        <Grid>
          <Grid container>
            {cards?.map((card, idx) => (
              <Grid className="div-svg" key={idx}>
                {isHid && !!idx ? <EmptyCard /> : getCards(card - 1)}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="amount">
        {amount}
      </Grid>
    </Grid>
  )
}

export default CardsTable
