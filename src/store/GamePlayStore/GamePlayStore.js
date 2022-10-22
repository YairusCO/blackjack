import {
  observable,
  makeObservable,
  action,
  configure,
  // runInAction,
} from 'mobx'
import { v4 } from 'uuid'
import { subscribe } from '../../services/pubsub'
import Actions from '../../util/actions.js'
import { getCard } from '../../util/utils.js'

configure({ enforceActions: 'observed' })

const BLACKJACK = 21
const J = 11
const Q = 12
const K = 13
const ACE_MAX = 11
const ACE_MIN = 1

const CARD_JQK_MAPPER = {
  [J]: 10,
  [Q]: 10,
  [K]: 10,
}

const JOCKER = 14

class GamePlayStore {
  gameId = null
  dealerCards = []
  playerCards = []
  playerBank = 1000
  playerDealCount = 0

  isInitialDeal = true
  isBust = false
  isWin = false
  constructor() {
    makeObservable(this, {
      gameId: observable,
      playerCards: observable,
      playerBank: observable,
      playerDealCount: observable,
      dealerCards: observable,
      isInitialDeal: observable,
      isBust: observable,
      /* Actions */
      initAllCards: action,
      initCards: action,
      hit: action,
      stand: action,
      addMoney: action,
      isNumCard: action,
      getDeal: action,
    })
    this.initAllCards = this.initAllCards.bind(this)
    this.initCards = this.initCards.bind(this)
    this.hit = this.hit.bind(this)
    this.stand = this.stand.bind(this)
    this.addMoney = this.addMoney.bind(this)
    this.isNumCard = this.isNumCard.bind(this)
    this.getDeal = this.getDeal.bind(this)
    this.newGame = this.newGame.bind(this)
    subscribe(Actions.INIT_GAME, this.newGame)
  }

  newGame() {
    this.gameId = v4()
    this.initAllCards()
  }
  /* @action */
  initAllCards() {
    this.dealerCards = this.initTwoCards()
    this.playerCards = this.initTwoCards()
  }
  initTwoCards() {
    const firstCard = getCard()
    const secCard = getCard()
    return [firstCard, secCard]
  }
  hit() {
    const num = getCard()
    return num
  }

  initCards() {}
  stand() {}

  addMoney(num) {
    if (num <= this.playerBank) {
      this.playerDealCount = this.playerDealCount + num
      this.playerBank = this.playerBank - num
    }
  }

  isBlckjack(cardsValue) {
    return cardsValue === BLACKJACK
  }

  isWon(card, currentAmount) {
    const cardsAmount = this.calcCardsAmount(card, currentAmount)
    if (this.isBlckjack(cardsAmount)) {
    }
  }

  calcCardsAmount(card, currentAmount) {
    if (this.isJocker(card)) {
      return BLACKJACK
    }

    if (this.isAce(card)) {
      return (
        currentAmount +
        (ACE_MAX + currentAmount < BLACKJACK ? ACE_MAX : ACE_MIN)
      )
    }

    return (CARD_JQK_MAPPER[card] || card) + currentAmount
  }

  isJocker(card) {
    return card === JOCKER
  }

  getDeal(isBoolean) {
    this.isInitialDeal = isBoolean
  }
}

export default GamePlayStore
