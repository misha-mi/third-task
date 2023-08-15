import "./log-in.sass";

import Title from "@/components/ui/title/title";

import LogInForm from "@/components/layout/log-in-form/log-in-form";
import ReduxProvider from "@/components/layout/provider/provider";

const LogIn = () => {
  return (
    <div className="log-in">

      <div className="log-in__title">
        <Title titleText="Log In" />
      </div>

      <ReduxProvider>
        <LogInForm />
      </ReduxProvider>
    </div>
  )
}

export default LogIn;