import "./log-in.sass";

import Form from "@/components/ui/form/form";

const LogIn = () => {
  return (
    <div className="log-in">

      <h2 className="log-in__title">Log In</h2>

      <Form inputs={{
        "Email": "",
        "Password": ""
      }} buttonText="Log in" />

    </div>
  )
}

export default LogIn;