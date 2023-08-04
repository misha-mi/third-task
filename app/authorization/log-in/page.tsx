import "./log-in.sass";


import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";

const LogIn = () => {
  return (
    <div className="log-in">

      <h2 className="log-in__title">Log In</h2>

      <form action="#" className="log-in__form">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <div className="log-in__submit">
          <Button text="Log In" width="w200px" />
        </div>
      </form>

    </div>
  )
}

export default LogIn;