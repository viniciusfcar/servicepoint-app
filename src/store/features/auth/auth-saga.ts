import { takeLatest, all, put, call, select } from "redux-saga/effects";

import {
  signInRequest,
  signInSuccess,
  signInFailure,
  setOnboarding,
} from "./auth-slice";
import api from "../../../services/api";

export function* _signInRequest({ payload }) {
  try {
    yield put(setOnboarding());
  } catch (error) {
    console.log("Error em _signInRequest: ", error);
  }
}

export default all([
  takeLatest<string, any>(signInRequest.type, _signInRequest),
]);
