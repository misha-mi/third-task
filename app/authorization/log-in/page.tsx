import "./log-in.sass";
import { ILogIn } from "./type";

import Title from "@/components/ui/title/title";
import LogInForm from "@/components/layout/forms/log-in-form/log-in-form";
import ReduxProvider from "@/components/HOC/provider";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "GScore | Sign In"
}

const LogIn = ({ searchParams }: ILogIn) => {
  return (
    <div className="log-in">

      <div className="log-in__title">
        <Title titleText="Log In" />
      </div>

      <ReduxProvider>
        <LogInForm destinationPath={searchParams.destinationPath} />
      </ReduxProvider>
    </div>
  )
}

export default LogIn;