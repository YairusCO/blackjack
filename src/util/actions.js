import keyMirror from 'key-mirror'

const appActions = Object.freeze(
  keyMirror({
    APPLICATION_MOUNTED: null,
    APPLICATION_UNMOUNTED: null,
  }),
)

const routeActions = Object.freeze(
  keyMirror({
    HOME_PAGE_ROUTE_REQUESTED: null,
  }),
)

const userActions = Object.freeze(
  keyMirror({
    UNAUTHORIZED: null,
    GET_CURRENT_USER: null,
    USER_LOGGED_OUT: null,
    LOGIN: null,
  }),
)

const httpActions = Object.freeze(
  keyMirror({
    HTTP_API_STARTED: null,
    HTTP_API_ENDED: null,
    USER_LOGGED_IN: null,
  }),
)
const initGameAction = Object.freeze(
  keyMirror({
    INIT_GAME: null,

  }),
)

export const Actions = {
  ...appActions,
  ...userActions,
  ...httpActions,
  ...routeActions,
  ...initGameAction,
}
export default Actions
