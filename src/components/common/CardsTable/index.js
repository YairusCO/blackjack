import CardsTable from './CardsTable'
import './CardsTable.scss'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'

export default inject(({ gamePlayStore }) => ({
  playerBank: gamePlayStore.playerBank,
  playerDealCount: gamePlayStore.playerDealCount,
  isInitialDeal: gamePlayStore.isInitialDeal,
  getDeal: gamePlayStore.getDeal,
  playerCards: gamePlayStore.playerCards,
  dealerCards: gamePlayStore.dealerCards,
  hit: gamePlayStore.hit,
  stand: gamePlayStore.stand,
}))(observer(withTranslation()(CardsTable)))
