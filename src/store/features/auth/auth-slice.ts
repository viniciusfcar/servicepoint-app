import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  signed: false,
  onboard: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInRequest: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action: PayloadAction<any>) => {
      (state.token = action.payload.token), (state.loading = false);
      state.signed = true;
    },
    signInFailure: (state) => {
      state.loading = false;
    },
    setOnboarding: (state) => {
      console.log('AQUi')
      state.onboard = true;
    },
  },
});

export const { signInRequest, signInSuccess, signInFailure, setOnboarding } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
