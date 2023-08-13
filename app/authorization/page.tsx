"use client";

import Link from "next/link";
import Form from "@/components/ui/form/form";
import Title from "@/components/ui/title/title";

import axios from "axios";

export default function Authorization() {

  const handlerSubmit = async (data: { username: string, password: string, email: string }) => {
    await axios({
      method: "POST",
      url: "http://localhost:3000/api/signUp",
      data: data
    })
      .then(response => console.log(response.data));
  }

  return (
    <>
      <div className="authorization__title">
        <Title titleText="Create account" />
      </div>
      <p className="authorization__need">
        You need to enter your name and email. We will send you a temporary password by email
      </p>

      <div className="authorization__form">
        <Form
          inputs={{
            "username": "", "email": "", "password": ""
          }}
          buttonText="Send password"
          onSubmit={handlerSubmit} />
      </div>

      <p className="authorization__have">
        Have an account?
        <Link
          href={"/authorization/log-in"}
          className="authorization__next"
        >
          Go to the next step
        </Link>
      </p>
    </>
  )
}