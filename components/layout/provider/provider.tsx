"use client"
import { ReactNode } from "react";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "@/store/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider;