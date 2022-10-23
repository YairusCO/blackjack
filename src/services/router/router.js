import history from '../history'
import { dispatch } from '../pubsub'
import Actions from '../../util/actions.js'
import { GAME } from '../../util/routes.js'
import routerConfig from './routerConfig'

const router = routerConfig({ history })

router.setRoute(
  GAME,
  { exact: false },
  ({ params, path, routeParams, urlRoute }) => {
    dispatch(Actions.INIT_GAME, routeParams, params, path, urlRoute)
  }
)

export default router
