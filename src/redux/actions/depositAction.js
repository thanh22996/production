import * as types from './index'

export function detectCardATMNumberAction(data, callback) {
  return {
    type: types.GET_DETECT_CARD_NUMBER,
    payload: data,
    callback
  }
}

export function getListBankAction() {
  return {
    type: types.GET_LIST_BANKS,
  }
}

export function getFeeSerViceAction(data,callback){
  return {
    type: types.GET_FEE_SERVICE,
    payload:data,
    callback
  }
}

export function depositBankCardAction(data,callback){
  return {
    type:types.DEPOSIT_PAYME,
    payload:data,
    callback
  }
}
