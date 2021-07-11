import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../models/auth";
/* ------------- Sagas ------------- */
import {
  signInByEmail,
  logOut,
} from "./AuthSagas";


export default function* root() {
  yield all([
    // AUTH
    takeLatest(AuthTypes.SIGN_IN_BY_EMAIL, signInByEmail),
    takeLatest(AuthTypes.LOG_OUT, logOut),

  ]);
}
