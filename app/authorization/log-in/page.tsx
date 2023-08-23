import "./log-in.sass";

import Title from "@/components/ui/title/title";

import LogInForm from "@/components/layout/forms/log-in-form/log-in-form";
import ReduxProvider from "@/components/HOC/provider";

const LogIn = ({ searchParams }: { searchParams: { destinationPath: string } }) => {
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