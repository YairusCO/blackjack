import { noop } from 'lodash'

const debug =
  process.env.REACT_APP_DEBUG || window.location.search.startsWith('?debug')
export default ((outStream, debugMode) => {
  return Object.entries(outStream).reduce(
    (logger, [key, func]) =>
      typeof func === 'function'
        ? { ...logger, [key]: debugMode ? func.bind(outStream) : noop }
        : logger,
    {}
  )
})(console, debug)
