import { ISubscriptionState } from "./type";

import { getUsersSubscriptions, getCodesById, activateCode } from "./actions";

import { createSlice } from "@reduxjs/toolkit";


const initialState: ISubscriptionState = {
  loading: false,
  subscriptions: [],
  codes: []
};

const subscriptionsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsersSubscriptions.pending, state => {
        state.loading = true
      })
      .addCase(getUsersSubscriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = action.payload.subscriptions;
        state.codes = action.payload.firstSubscriptionsCodes;
      })

      .addCase(getCodesById.pending, state => {
        state.loading = true
      })
      .addCase(getCodesById.fulfilled, (state, action) => {
        state.loading = false;
        state.codes = action.payload;
      })

      .addCase(activateCode.pending, state => {
        state.loading = true
      })
      .addCase(activateCode.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.codes[action.payload.id] = action.payload.code;
        }
      })
  }
});

export default subscriptionsSlice.reducer;