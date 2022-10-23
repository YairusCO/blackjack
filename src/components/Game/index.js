import Game from './Game'
import './Game.scss'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'

export default inject(({ gamePlayStore }) => {
  return {
    isInitialDeal: gamePlayStore.isInitialDeal,
    playerStatus: gamePlayStore.playerStatus,
    reset: gamePlayStore.reset,
  }
})(observer(withTranslation()(Game)))
