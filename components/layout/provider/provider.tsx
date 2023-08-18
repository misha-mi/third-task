"use client"
import { ReactNode } from "react";

import { Provider } from "react-redux";

import { store, persistor } from "@/store/ducks/store";

import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider;