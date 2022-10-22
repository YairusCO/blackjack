import Table from './Table'
import { withTranslation } from 'react-i18next'

import { inject, observer } from 'mobx-react'

export default inject(({ gamePlayStore }) => ({
  playerBank: gamePlayStore.playerBank,
  playerDealCount: gamePlayStore.playerDealCount,
  isInitialDeal: gamePlayStore.isInitialDeal,
  playerCards: gamePlayStore.playerCards,
  getDeal: gamePlayStore.getDeal,
  dealerCards: gamePlayStore.dealerCards,
}))(observer(withTranslation()(Table)))
