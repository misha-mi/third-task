import { ISubscriptionState } from "./type";

import { getUsersSubscriptions, getCodesById, activateCode } from "./actions";

import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";
import { TSubscription } from "@/types";


const initialState: ISubscriptionState = {
  loadingSubscriptions: false,
  loadingCodes: false,
  subscriptions: [],
  codes: [],
  viewSubscriptionsId: 0,
  sitesCount: 0
};

const subscriptionsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSubscription: (state, action: PayloadAction<TSubscription>) => {
      state.subscriptions.forEach((item, id) => {
        if (item.id === action.payload.id) {
          state.subscriptions[id] = action.payload;
        }
      })
    },
    setViewSubscriptionsId: (state, action: PayloadAction<number>) => {
      state.viewSubscriptionsId = action.payload;
    },
    setSitesCount: (state, action: PayloadAction<number>) => {
      state.sitesCount = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersSubscriptions.pending, state => {
        state.loadingSubscriptions = true
      })
      .addCase(getUsersSubscriptions.fulfilled, (state, action) => {
        state.loadingSubscriptions = false;
        state.subscriptions = action.payload.subscriptions;
        state.codes = action.payload.firstSubscriptionsCodes;
        state.viewSubscriptionsId = action.payload.subscriptions[0].id;
        state.sitesCount = action.payload.subscriptions[0].sitesCount;
      })

      .addCase(getCodesById.pending, state => {
        state.loadingCodes = true
      })
      .addCase(getCodesById.fulfilled, (state, action) => {
        state.loadingCodes = false;
        state.codes = action.payload;
      })

      .addCase(activateCode.fulfilled, (state, action) => {
        if (action.payload) {
          state.codes[action.payload.id] = action.payload.code;
        }
      })
  }
});

export const { updateSubscription, setViewSubscriptionsId, setSitesCount } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;