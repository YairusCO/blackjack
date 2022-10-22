import { action, configure, makeObservable } from 'mobx'

import logger from '../../services/logger'
import { dispatch } from '../../services/pubsub'
import Actions from '../../util/actions.js'
configure({ enforceActions: 'observed' })

class RootStore {
  constructor({ apis, router, storage, window, gamePlayStore }) {
    makeObservable(this, {
      appMounted: action,
      appWillUnmount: action,
    })

    this.apis = apis
    this.router = router
    this.storage = storage
    this.window = window
    this.gamePlayStore = gamePlayStore
    this.appMounted = this.appMounted.bind(this)
    this.appWillUnmount = this.appWillUnmount.bind(this)
  }

  register() {}

  appMounted() {
    debugger
    dispatch(Actions.APPLICATION_MOUNTED)

    logger.log('App mounted')
  }

  // eslint-disable-next-line class-methods-use-this
  appWillUnmount() {
    dispatch(Actions.APPLICATION_UNMOUNTED)

    // Put here code that needs to know when the app will unmount
    logger.log('App will unmount')
  }
}

export default RootStore
