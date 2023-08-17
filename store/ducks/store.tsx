import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index";
import subscriptionReducer from "./subscriptions/index";

export const store = configureStore({
  reducer: {
    authReducer,
    subscriptionReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;