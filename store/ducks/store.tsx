import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/index";
import subscriptionReducer from "./subscriptions/index";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authReducer"]
}

const persistedReducer = persistReducer(persistConfig, combineReducers({ authReducer, subscriptionReducer }));

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;