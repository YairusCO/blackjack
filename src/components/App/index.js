import { inject } from 'mobx-react'
import { observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'
import App from './App'
import './App.css'

export default inject(
  ({ appMounted, appWillUnmount, authenticationStore }) => ({
    appMounted,
    appWillUnmount,
    changeValue: authenticationStore.changeValue,
    value: authenticationStore.value,
  }),
)(observer(withTranslation()(App)))
