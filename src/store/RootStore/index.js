import RootStore from './RootStore'
import AuthenticationStore from '../AuthenticationStore'

import storage from '../../services/storage'
import apis from '../../services/apis.js'
import router from '../../services/router'

export default new RootStore({
  apis,
  router,
  storage,
  window,
  authenticationStore: new AuthenticationStore({
    doesUserAuthenticated: false,
    token: null,
    username: '',
    password: '',
    whenLoginRouteUrl: '/',
    logoutUrl: '/login',
  }),
})
