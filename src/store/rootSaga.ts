import { all } from "redux-saga/effects";

import authSaga from "./features/auth/auth-saga";

export default function* rootSaga() {
  return yield all([authSaga]);
}
