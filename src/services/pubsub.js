import { Dispatcher } from 'flux'
/* Do not import Dispatcher direct from flux */
const singleton = new Dispatcher()

const running = {}

const getRunningList = () =>
  Object.entries(running).reduce(
    (acc, [action, value]) => ({ ...acc, ...(value && { [action]: value }) }),
    {}
  )
const hasRunningAction = (runningActions) =>
  !!Object.keys(runningActions).length
export const dispatch = (action, payload) => {
  const runningActions = getRunningList()

  if (hasRunningAction(runningActions)) {
    // console.warn(
    //   `Cannot dispatch in the middle of a dispatch.`,
    //   Object.keys(runningActions)
    // )
    return
  }

  singleton.dispatch({ action, ...payload })
}

export const subscribe = (regAction, func) => {
  if (!regAction) {
    throw Error(
      'Action name not supplied, verify that the action exists in actions file'
    )
  }
  singleton.register(({ action, ...payload }) => {
    const isMatch = action === regAction || regAction === '*'
    if (isMatch) {
      running[action] = true
      func.call(null, { action, ...payload })
      running[action] = false
    }
  })
}
