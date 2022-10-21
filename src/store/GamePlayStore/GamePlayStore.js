import {
  observable,
  makeObservable,
  action,
  configure,
  // runInAction,
} from 'mobx'

// import { dispatch, subscribe } from '../../services/pubsub'
// import Actions from '../../util/actions.js'
import { getCard } from '../../util/utils.js'

configure({ enforceActions: 'observed' })

class GamePlayStore {
  dealerCardsCount = null
  userCardsCount = null
  bank = 1000

  constructor() {
    makeObservable(this, {
      dealerCardsCount: observable,
      userCardsCount: observable,
      bank: observable,

      /* Actions */
      initAllCards: action,
      // initCards: action,
      hit: action,
      // stand: action,
    })
    this.initAllCards = this.initAllCards.bind(this)
    this.initCards = this.initCards.bind(this)
    this.hit = this.hit.bind(this)
    this.stand = this.stand.bind(this)

    // subscribe(Actions.INIT_GAME, this.initCards)
  }

  /* @action */
  initAllCards() {
    return { delear: this.initTwoCards, player: this.initTwoCards }
  }
  initTwoCards() {
    const firstCard = getCard()
    const secCard = getCard()
    return [firstCard, secCard]
  }
  hit() {
    return getCard()
  }

  initCards() {}
  stand() {}
}

export default GamePlayStore
