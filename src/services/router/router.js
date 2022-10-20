import history from '../history'
import { dispatch } from '../pubsub'
import Actions from '../../util/actions.js'
import { LOGIN, HOME, SIGN_UP } from '../../util/routes.js'
import routerConfig from './routerConfig'

const router = routerConfig({ history })
const extractParams = ({ search }) =>
  search
    .substr(1)
    .split('&')
    .filter((value) => value)
    .reduce((acc, pair) => {
      const [key, value] = pair.split('=')
      return { ...acc, [key]: value }
    }, {})

router
  .setRoute(
    HOME,
    { exact: false, exclude: { url: LOGIN, exact: true } },
    ({ params, path, routeParams, urlRoute }) => {
      dispatch(
        Actions.HOME_PAGE_ROUTE_REQUESTED,
        routeParams,
        params,
        path,
        urlRoute,
      )
    },
  )
  .setRoute(SIGN_UP, ({ routeParams: { search } }) => {
    const { email } = extractParams({ search })
    dispatch(SIGN_UP, { email })
  })
  .setRoute(LOGIN, ({ routeParams: { search } }) => {
    const { email } = extractParams({ search })
    dispatch(LOGIN, { email })
  })

export default router
