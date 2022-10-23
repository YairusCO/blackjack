import Table from './Table'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'

export default inject(({ gamePlayStore }) => ({
  playerCards: gamePlayStore.playerCards,
  dealerCards: gamePlayStore.dealerCards,
  playerCardsAmount: gamePlayStore.playerCardsAmount,
  dealerCardsAmount: gamePlayStore.dealerCardsAmount,
  dealerCardsAmountHid: gamePlayStore.dealerCardsAmountHid,
  isHid: gamePlayStore.isHid,
}))(observer(withTranslation()(Table)))
