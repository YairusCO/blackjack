import { subscribe } from './pubsub'
import Actions from '../util/actions'
import logger from './logger'

subscribe(Actions.UNAUTHORIZED, logger.error)
