import Game from './Game'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({ gamePlayStore }) => ({
  bank: gamePlayStore.bank,
}))(observer(withTranslation()(Game)))
