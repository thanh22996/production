import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";

function* doAction(action) {
    try {
        console.log('action',action);
        // console.log("cardNumber", cardNumber);
        const res = yield call(apiBusiness.callGraphql, `mutation depositWallet {
            Wallet {
              Deposit(
                input: {
                  clientId: "${clientId}"
                  amount:${amount}
                  payment: {
                    bankCard: {
                      cardNumber: "${cardNumber}"
                      cardHolder: "${cardHolder}"
                      issuedAt: "${issuedAt}"
                    }
                  }
                }
              ) {
                succeeded
                message
                payment {
                  ... on PaymentBankCardResponsed  {
                    state
                    message
                    html
                  }
                }
              }
            }
          }
    `);
        const resDATA = JSON.parse(res);
        
    } catch (error) {
        yield put({ type: types.DEPOSIT_PAYME_FAIL });
    }
}

export default function* watchAction() {
    yield takeLatest(types.DEPOSIT_PAYME, doAction);
}
