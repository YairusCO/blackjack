import Game from './Game'
import './Game.scss'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'

export default inject(({ gamePlayStore, appMounted, newGame }) => ({
  playerDetails: gamePlayStore.playerDetails,
  isInitialDeal: gamePlayStore.isInitialDeal,
  isBust: gamePlayStore.isBust,
  isWin: gamePlayStore.isWin,
  getDeal: gamePlayStore.getDeal,
  appMounted,
  newGame: gamePlayStore.newGame,
}))(observer(withTranslation()(Game)))
