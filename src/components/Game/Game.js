import { Grid } from '@mui/material'
import Table from './Table'
import InitialDeal from './InitialDeal'
import PopUpDialog from '../common/PopUpDialog'
const WIN = 'win'
const BUSTED = 'busted'
const PUSH = 'push'

const Game = ({ isInitialDeal, playerStatus, reset }) => {
  return (
    <div className="game">
      <Grid container className="game-container">
        {isInitialDeal && <InitialDeal />}
        {!isInitialDeal && <Table />}
      </Grid>
      {playerStatus === WIN && <PopUpDialog text={'you-win!'} reset={reset} />}
      {playerStatus === BUSTED && (
        <PopUpDialog text={'you-busted'} reset={reset} />
      )}
      {playerStatus === PUSH && <PopUpDialog text={'push'} reset={reset} />}
    </div>
  )
}

export default Game
