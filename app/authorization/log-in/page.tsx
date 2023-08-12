import "./log-in.sass";

import Title from "@/components/ui/title/title";
import Form from "@/components/ui/form/form";

const LogIn = () => {
  return (
    <div className="log-in">

      <div className="log-in__title">
        <Title titleText="Log In" />
      </div>

      <Form inputs={{
        "email": "",
        "password": ""
      }} buttonText="Log in" />

    </div>
  )
}

export default LogIn;