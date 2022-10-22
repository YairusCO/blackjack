import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import { initIntercept } from './services/fetchInterceptService'
import './index.css'
import i18n from './i18n'
import App from './components/App'
import appState from './store/RootStore'
import { subscribe } from './services/pubsub'
import logger from './services/logger'
import reportWebVitals from './reportWebVitals'
import { getAuthorizationHeader } from './util/authorization'

initIntercept({ getAuthorizationHeader })
subscribe('*', logger.log)

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider {...appState}>
          <App {...appState} />
        </Provider>
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
