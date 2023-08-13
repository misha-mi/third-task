"use client";
import "./log-in.sass";

import Title from "@/components/ui/title/title";
import Form from "@/components/ui/form/form";

import axios from "axios";

const LogIn = () => {

  const handlerSubmit = async (data: { username: string, password: string, email: string }) => {
    await axios({
      method: "POST",
      url: "http://localhost:3000/api/signIn",
      data: data
    })
      .then(response => console.log(response.data));
  }


  return (
    <div className="log-in">

      <div className="log-in__title">
        <Title titleText="Log In" />
      </div>

      <Form inputs={{
        "email": "",
        "password": ""
      }}
        buttonText="Log in"
        onSubmit={handlerSubmit}
      />

    </div>
  )
}

export default LogIn;