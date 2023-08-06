import Title from "@/components/ui/title/title";
import "./log-in.sass";

import Form from "@/components/ui/form/form";

const LogIn = () => {
  return (
    <div className="log-in">

      <div className="log-in__title">
        <Title titleText="Log In" />
      </div>

      <Form inputs={{
        "Email": "",
        "Password": ""
      }} buttonText="Log in" />

    </div>
  )
}

export default LogIn;