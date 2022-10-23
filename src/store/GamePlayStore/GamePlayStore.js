import { observable, makeObservable, action, configure } from 'mobx'
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

const PLAYING = 'playing'
const WIN = 'win'
const BUSTED = 'busted'
const PUSH = 'push'

const CARD_JQK_MAPPER = {
  [J]: 10,
  [Q]: 10,
  [K]: 10,
}

const JOCKER = 14

class GamePlayStore {
  playerStatus = PLAYING
  dealerCards = []
  playerCards = []
  dealerCardsAmountHid = null
  dealerCardsAmount = null
  playerCardsAmount = null
  playerBank = 1000
  playerDealCount = 0
  isHid = true
  isInitialDeal = true

  constructor() {
    makeObservable(this, {
      playerStatus: observable,
      playerCards: observable,
      playerBank: observable,
      playerDealCount: observable,
      dealerCards: observable,
      isInitialDeal: observable,
      dealerCardsAmount: observable,
      playerCardsAmount: observable,
      dealerCardsAmountHid: observable,
      isHid: observable,

      /* Actions */
      initAllCards: action,
      hit: action,
      stand: action,
      addMoney: action,
      getDeal: action,
      calcCardsAmount: action,
      isWon: action,
      isBustAfterHit: action,
      isWonAfterStand: action,
      reset: action,
      resetCount: action,
    })

    subscribe(Actions.INIT_GAME, this.newGame)
  }

  newGame = () => {
    this.initAllCards()
    this.dealerCardsAmount = this.calcCardsAmount(this.dealerCards[0], 0)

    if (!this.isBlckjack(this.dealerCardsAmount)) {
      this.dealerCardsAmount = this.calcCardsAmount(
        this.dealerCards[1],
        this.dealerCardsAmount
      )
      this.dealerCardsAmountHid = this.calcCardsAmount(this.dealerCards[0], 0)
    }

    this.playerCardsAmount = this.calcCardsAmount(this.playerCards[0], 0)
    if (!this.isBlckjack(this.playerCardsAmount)) {
      this.playerCardsAmount = this.calcCardsAmount(
        this.playerCards[1],
        this.playerCardsAmount
      )
    }
    this.isWon()
  }

  initAllCards = () => {
    this.dealerCards = this.initTwoCards()
    this.playerCards = this.initTwoCards()
  }
  initTwoCards = () => {
    const firstCard = getCard()
    const secCard = getCard()
    return [firstCard, secCard]
  }
  hit = () => {
    const num = getCard()
    this.playerCards.push(num)
    this.playerCardsAmount = this.calcCardsAmount(num, this.playerCardsAmount)
    this.isWon()
    this.isBustAfterHit()
  }

  stand = () => {
    this.isHid = false

    while (this.dealerCardsAmount < 17) {
      const num = getCard()
      this.dealerCards.push(num)
      this.dealerCardsAmount = this.calcCardsAmount(num, this.dealerCardsAmount)
    }
    this.isWonAfterStand()
  }

  addMoney = (num) => {
    if (num <= this.playerBank) {
      this.playerDealCount += num
      this.playerBank -= num
    }
  }

  isBlckjack = (cardsValue) => {
    return cardsValue === BLACKJACK
  }

  isWon = () => {
    if (
      this.isBlckjack(this.playerCardsAmount) &&
      this.isBlckjack(this.dealerCardsAmount)
    ) {
      this.playerStatus = PUSH
      this.isHid = false
    } else if (this.isBlckjack(this.playerCardsAmount)) {
      this.playerStatus = WIN
      this.isHid = false

      this.playerBank += this.playerDealCount
    } else if (this.isBlckjack(this.dealerCardsAmount)) {
      this.playerStatus = BUSTED
      this.isHid = false
      this.playerDealCount = 0
    }
  }
  isBustAfterHit = () => {
    if (this.playerCardsAmount > BLACKJACK) {
      this.playerStatus = BUSTED
      this.isHid = false
      this.playerDealCount = 0
    }
  }
  isWonAfterStand = () => {
    if (
      this.dealerCardsAmount > BLACKJACK ||
      this.dealerCardsAmount < this.playerCardsAmount
    ) {
      this.playerStatus = WIN
      this.isHid = false
      this.playerBank += this.playerDealCount
    } else if (
      this.isBlckjack(this.dealerCardsAmount) ||
      this.dealerCardsAmount > this.playerCardsAmount
    ) {
      this.playerStatus = BUSTED
      this.isHid = false
      this.playerDealCount = 0
    } else if (this.dealerCardsAmount === this.playerCardsAmount) {
      this.playerStatus = PUSH
      this.isHid = false
    }
  }

  calcCardsAmount = (card, currentAmount) => {
    if (this.isJocker(card)) {
      return BLACKJACK
    }

    if (this.isAce(card)) {
      return (
        currentAmount +
        (ACE_MAX + currentAmount <= BLACKJACK ? ACE_MAX : ACE_MIN)
      )
    }

    return (CARD_JQK_MAPPER[card] || card) + currentAmount
  }

  isJocker = (card) => {
    return card === JOCKER
  }
  isAce = (card) => {
    return card === ACE_MIN
  }

  getDeal = (isBoolean) => {
    this.isInitialDeal = isBoolean
  }

  reset = () => {
    this.dealerCards = []
    this.playerCards = []
    this.dealerCardsAmount = null
    this.playerCardsAmount = null
    this.isInitialDeal = true
    this.playerStatus = PLAYING
    this.isHid = true
  }

  resetCount = () => {
    this.playerBank += this.playerDealCount
    this.playerDealCount = 0
  }
}

export default GamePlayStore
