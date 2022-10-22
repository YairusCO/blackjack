import RootStore from './RootStore'
import GamePlayStore from '../GamePlayStore'

import storage from '../../services/storage'
import apis from '../../services/apis.js'
import router from '../../services/router'

export default new RootStore({
  apis,
  router,
  storage,
  window,

  gamePlayStore: new GamePlayStore(),
})
