"use client"
import { ReactElement, useState } from "react";

import { useAppSelector } from "@/store/redux-hooks";
import getUserData from "@/services/getUserData";

import { redirect } from "next/navigation";

const PrivateRoute = ({ children, destinationPath }: { children: ReactElement, destinationPath: string }) => {

  const [authStatus, setAuthStatus] = useState<"loading" | "access" | "no-access">("loading");

  const token = useAppSelector(store => store.auth.token);

  getUserData(token)
    .then(res => {
      !res.data.message ?
        setAuthStatus("access") :
        setAuthStatus("no-access");
    })

  return (
    <>
      {authStatus === "loading" ? (<div>Loading...</div>) : null}
      {authStatus === "access" ? (children) : null}
      {authStatus === "no-access" ? redirect(destinationPath) : null}
    </>
  )
}

export default PrivateRoute;