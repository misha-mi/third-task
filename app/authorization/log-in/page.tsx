import "./log-in.sass";

import Title from "@/components/ui/title/title";

import LogInForm from "@/components/layout/log-in-form/log-in-form";
import ReduxProvider from "@/components/layout/provider/provider";

const LogIn = ({ searchParams }: { searchParams: { productId: number } }) => {
  return (
    <div className="log-in">

      <div className="log-in__title">
        <Title titleText="Log In" />
      </div>

      <ReduxProvider>
        <LogInForm productId={searchParams.productId} />
      </ReduxProvider>
    </div>
  )
}

export default LogIn;