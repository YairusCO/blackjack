import keyMirror from 'key-mirror'

const initGameAction = Object.freeze(
  keyMirror({
    APPLICATION_MOUNTED: null,
    APPLICATION_UNMOUNTED: null,
    INIT_GAME: null,
  })
)

export const Actions = {
  ...initGameAction,
}
export default Actions
