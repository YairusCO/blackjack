import InitialDeal from './InitialDeal'
import './InitialDeal.scss'
import { withTranslation } from 'react-i18next'

import { inject, observer } from 'mobx-react'

export default inject(({ gamePlayStore }) => ({
  playerBank: gamePlayStore.playerBank,
  playerDealCount: gamePlayStore.playerDealCount,
  dealerCards: gamePlayStore.dealerCards,
  playerCards: gamePlayStore.playerCards,
  addMoney: gamePlayStore.addMoney,
  isInitialDeal: gamePlayStore.isInitialDeal,
  getDeal: gamePlayStore.getDeal,
  newGame: gamePlayStore.newGame,
  resetCount: gamePlayStore.resetCount,
}))(observer(withTranslation()(InitialDeal)))
