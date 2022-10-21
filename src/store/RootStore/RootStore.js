import { action, configure, makeObservable } from 'mobx'

import logger from '../../services/logger'
import { dispatch, subscribe } from '../../services/pubsub'
import Actions from '../../util/actions.js'
configure({ enforceActions: 'observed' })

class RootStore {
  constructor({
    apis,
    router,
    storage,
    window,
    TOKEN_KEYWORD,
    authenticationStore,
    gamePlayStore,
  }) {
    makeObservable(this, {
      appMounted: action,
      appWillUnmount: action,
    })

    this.apis = apis
    this.router = router
    this.storage = storage
    this.window = window
    this.TOKEN_KEYWORD = TOKEN_KEYWORD

    this.authenticationStore = authenticationStore
    this.gamePlayStore = gamePlayStore

    this.authenticationStore.rootStore = this
    this.logout = this.logout.bind(this)
    this.register = this.register(this)
    this.loggedIn = this.loggedIn.bind(this)
    this.appMounted = this.appMounted.bind(this)
    this.appWillUnmount = this.appWillUnmount.bind(this)
    subscribe(Actions.HTTP_API_STARTED, () => {
      logger.log('http call started')
    })

    subscribe(Actions.HTTP_API_ENDED, () => {
      logger.log('http call ended')
    })

    subscribe(Actions.USER_LOGGED_IN, this.loggedIn)
    router.init()
  }

  loggedIn() {}

  logout() {
    //Notify others

    this.storage.clear()
  }

  register() {}

  appMounted() {
    dispatch(Actions.APPLICATION_MOUNTED, {
      value: 'Example of value that send on action',
    })
    dispatch(Actions.GET_CURRENT_USER)
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
