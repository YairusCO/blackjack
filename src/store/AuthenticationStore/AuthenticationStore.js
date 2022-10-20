import {
  observable,
  makeObservable,
  action,
  configure,
  runInAction,
} from 'mobx'
import history from '../../services/history'
import { LOGIN } from '../../util/routes'
import { dispatch, subscribe } from '../../services/pubsub'
import Actions from '../../util/actions.js'
import logger from '../../services/logger'
import { USER_TOKEN } from '../../util/consts'
import isEmail from 'validator/lib/isEmail'

configure({ enforceActions: 'observed' })

class AuthenticationStore {
  doesUserAuthenticated = false
  userInfo = {}
  value = 1

  changeValue() {
    runInAction(() => {
      this.value++
    })
  }
  constructor({ doesUserAuthenticated, token, whenLoginRouteUrl, logoutUrl }) {
    makeObservable(this, {
      doesUserAuthenticated: observable,
      userInfo: observable,

      /* Actions */
      credentialChange: action,
      login: action,
      logout: action,
      verifyUserAuthenticated: action,
      value: observable,
      changeValue: action,
    })
    this.doesUserAuthenticated = doesUserAuthenticated
    this.token = token
    this.whenLoginRouteUrl = whenLoginRouteUrl
    this.logoutUrl = logoutUrl

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.verifyUserAuthenticated = this.verifyUserAuthenticated.bind(this)

    this.verifyUser = this.verifyUser.bind(this)
    this.storeUserDetails = this.storeUserDetails.bind(this)
    this.changeValue = this.changeValue.bind(this)

    subscribe(Actions.UNAUTHORIZED, this.logout)
    subscribe(Actions.APPLICATION_MOUNTED, this.verifyUser)
    subscribe(Actions.LOGIN, ({ email }) => {
      runInAction(() => {
        if (email && isEmail(email)) {
          this.username = email
        }
      })
    })
  }

  verifyUser() {
    logger.log('verify user')
    this.verifyUserAuthenticated()
  }

  logout() {
    logger.log('user logout')
    dispatch(Actions.USER_LOGGED_OUT)
  }

  storeUserDetails({ token, username }) {
    this.rootStore.storage.set(USER_TOKEN, {
      token,
      username,
    })
  }

  /* @action */
  login() {
    logger.log('user login')
  }

  /* @action */
  credentialChange({ username, password }) {
    runInAction(() => {
      this.username = username
      this.password = password
    })
  }

  /* @action */
  verifyUserAuthenticated() {
    if (!this.doesUserAuthenticated) {
      history.push(LOGIN)
    }
  }
}

export default AuthenticationStore
