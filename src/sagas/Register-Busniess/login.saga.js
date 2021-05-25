import { call, put, takeLatest } from "redux-saga/effects";
import { fingerprintPromise } from "utils/helpers/clientId";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";
import _ from "lodash";

export function* loginUser(action) {
  try {
    const { phone, password, clientId } = action.users;
    const activeCode = action.users.activeCode || "";
    console.log("typeof activeCode", typeof activeCode);
    const res = yield call(
      apiBusiness.callGraphql,
      `mutation login {
        Account {
          Login(input: { phone: "${phone}",
            password: "${password}",
            clientId: "${clientId}",
            activeCode: "${activeCode}"
          }) {
            state
            succeeded
            message
            accessToken
          }
        }
      }
    `
    );

    const response = JSON.parse(res);

    if (_.get(response, "data.Account.Login", null)) {
      // yield put(loadDataSuccess(data));
      console.log("okie", response.data.Account.Login);
      console.log("ac", action);
      action.callBack(
        response.data.Account.Login.succeeded,
        response.data.Account.Login
      );
    } else {
      console.log("not oke");
      action.callBack(false, response.data.Account.Login);
    }
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

export function* trustDevice(action) {
  try {
    console.log("tau vô đây rồi");
    const { phone, clientId } = action.payload;
    console.log("action", action);

    const res = yield call(
      apiBusiness.callGraphql,
      `mutation sentOtpLogin {
        Account {
          TrustDevice {
            SendOTP(input:{
              phone: "${phone}"
              clientId: "${clientId}"
            }) {
              succeeded
              message
            }
          }
        }
      }
    `
    );

    const response = JSON.parse(res);

    if (_.get(response, "data.Account.TrustDevice.SendOTP", null)) {
      action.callBack(
        response.data.Account.TrustDevice.SendOTP.succeeded,
        response.data.Account.TrustDevice.SendOTP
      );
    } else {
      console.log("not oke");
      action.callBack(false, response.data.Account.TrustDevice.SendOTP);
    }

    // const response = JSON.parse(res);
    // console.log("res", response);
    // // const { clientId } = JSON.parse(res).data.Client.Register;
    // if (response.data.Account)
    //   yield put({
    //     type: types.LOGIN_USER_SUCCESS,
    //     payload: {},
    //   });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export default function* watchAction() {
  yield takeLatest(types.LOGIN_USER, loginUser);
  yield takeLatest(types.SEND_OTP_TRUST_DEVICE, trustDevice);
}
