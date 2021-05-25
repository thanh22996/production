import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";
import _ from "lodash";

export function* getHistory(action) {
  try {
    const accessToken = localStorage.getItem("token");
    const res = yield call(
      apiBusiness.callGraphql,
      `query getHistory {
        History {
          title
          amount
          fee
          total
          balance {
            before
            after
          }
          createdAt
          publishedAt
          state
          changed
          payment {
            paymentId
            transaction
            method
            state
            description
          }
        }
      }
    `,
      { accessToken }
    );

    const response = JSON.parse(res);

    let errorInvalid = null;
    console.log("---Response---", response);

    console.log(_.get(response, "errors", null));
    if (_.get(response, "errors", null) !== null) {
      const test = _.get(response, "errors", null).map((value) => {
        if (value.extensions.code === 401) {
          error = 401;
        }
      });
      console.log("test", errorInvalid);
      if (errorInvalid === 401) {
        localStorage.removeItem("token");
        action.callBack(
          response.data.Account.Login.succeeded,
          response.data.Account.Login
        );
      }
    }

    // if (_.get(response, "data.Account.Login", null)) {
    //   // yield put(loadDataSuccess(data));
    //   console.log("okie", response.data.Account.Login);
    //   console.log("ac", action);
    //   action.callBack(
    //     response.data.Account.Login.succeeded,
    //     response.data.Account.Login
    //   );
    // } else {
    //   console.log("not oke");
    //   action.callBack(false, response.data.Account.Login);
    // }
    yield put({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        accessToken: response.data.Account.Login.accessToken,
        status: response.data.Account.Login.accessToken,
      },
    });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_HISTORY_LIST, getHistory);
}
