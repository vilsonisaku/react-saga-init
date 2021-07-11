import { put, call, delay } from "redux-saga/effects";

import AuthActions from "../models/auth";

import {
  fetchLogin,
  logoutApi,
} from "../services/auth";


export function* signInByEmail(credencials) {
  const response = yield call(
    fetchLogin,
    credencials.email,
    credencials.password
  );

  console.log("response", response);
  if (response && response.data) {
    if (!response.data.resultCode) {
      sessionStorage.setItem("accountData", JSON.stringify(response.data));

      yield put(AuthActions.setAccountInfo(response.data));

    } else {
      if (
        response.data.resultCode &&
        parseInt(response.data.resultCode) === 514
      ) {
        yield put(AuthActions.togglePopUpChangePass(true));
        yield put(AuthActions.setEmailOnLogin(credencials.email));
      } else {
        yield put(AuthActions.setAccountInfoError(response.data));
        yield delay(3000);
        yield put(AuthActions.setAccountInfoError({}));
      }
    }
  }
  if (response && response.error) {
    if (response.error.response) {
      if (response.error.response.data) {
        yield put(
          AuthActions.setAccountInfoError(response.error.response.data)
        );
      }
    }
  }
}


export function* logOut() {
  const response = yield call(logoutApi);
  if (response && response.status === 200) {
    // document.location.href="/home"

    window.emptyCart();
    sessionStorage.setItem("accountData", null);
    yield put(AuthActions.setAccountInfo({}));
    yield delay(10000);
  }
}



