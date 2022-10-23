import React from 'react'
import { Grid } from '@mui/material'
import CardsTable from '../../common/CardsTable'
const Table = ({
  playerCardsAmount,
  dealerCardsAmount,
  dealerCardsAmountHid,
  dealerCards,
  playerCards,
  isHid,
}) => {
  return (
    <div className="Table">
      <Grid className="Table-container">
        <CardsTable
          isHid={isHid}
          isPlayer={false}
          cards={dealerCards}
          amount={isHid ? dealerCardsAmountHid : dealerCardsAmount}
        />
        <CardsTable
          isHid={false}
          isPlayer={true}
          cards={playerCards}
          amount={playerCardsAmount}
        />
      </Grid>
    </div>
  )
}

export default Table
