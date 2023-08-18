"use client"
import { ReactElement } from "react";

import { store } from "@/store/store";
import { redirect } from "next/navigation";

const PrivateRoute = ({ children }: { children: ReactElement }) => {

  const token = store.getState().auth.token;
  return (
    <>
      {token ? (children) : redirect("/authorization")}
    </>
  )
}

export default PrivateRoute;