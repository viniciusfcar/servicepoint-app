import { takeLatest, all, put, call, select } from "redux-saga/effects";

import {
  signInRequest,
  signInSuccess,
  signInFailure,
  setOnboarding,
  setReducer,
} from "./auth-slice";
import api from "../../../services/api";

export function* _signInRequest() {
  try {
    yield put(setReducer({ key: "onboard", data: true }));
  } catch (error) {
    console.log("Error em _signInRequest: ", error);
  }
}

export default all([
  takeLatest<string, any>(signInRequest.type, _signInRequest),
]);
