import { BehaviorSubject } from 'rxjs'

class DetailsStore {
  _transactionMainDetails = new BehaviorSubject()
  _transactionExtraDetails = new BehaviorSubject()
  _error = null

  get transactionMainDetailsSubject() {
    return this._transactionMainDetails
  }

  get transactionMainDetails() {
    return this.transactionMainDetailsSubject.getValue()
  }

  set transactionMainDetails(value) {
    this.transactionMainDetailsSubject.next(value)
  }

  get transactionExtraDetailsSubject() {
    return this._transactionExtraDetails
  }

  get transactionExtraDetails() {
    return this.transactionExtraDetailsSubject.getValue()
  }

  set transactionExtraDetails(value) {
    this.transactionExtraDetailsSubject.next(value)
  }

  get error() {
    return this._error
  }

  set error(value) {
    this._error = value
  }
}

export const detailsStore = new DetailsStore()
