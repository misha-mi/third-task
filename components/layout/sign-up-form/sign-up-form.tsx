"use client"
import Form from "@/components/ui/form/form";
import postSignUp from "@/services/postSignUp";
import { useState } from "react";

const SignUpForm = () => {

  const [status, setStatus] = useState<"waiting" | "loading" | "error" | "success">("waiting");

  const handlerSubmit = (data: { username: string, password: string, email: string }) => {
    setStatus("loading");
    postSignUp(data).then((res) => {
      if (res.response.error) {
        setStatus("error");
      } else {
        setStatus("success");
      }
    });
  }

  return (
    <Form
      inputs={{
        "username": "", "email": "", "password": ""
      }}
      buttonText="Send password"
      onSubmit={handlerSubmit}
      status={status}
    />
  )
}

export default SignUpForm;