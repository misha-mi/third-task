"use client"
import "./sign-up-form.sass";

import postSignUp from "@/services/postSignUp";
import { useState } from "react";
import Input from "@/components/ui/input/input";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/button/button";

interface IForm {
  username: string;
  password: string;
  email: string;
}

const SignUpForm = () => {

  const [status, setStatus] = useState("start");

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const handlerSubmit = (data: { username: string, password: string, email: string }) => {
    setStatus("loading");
    postSignUp(data).then((res) => {
      console.log(res.response)
      if (res.response.message) {
        setStatus(res.response.message);
      } else {
        setStatus("success");
      }
    });
  }


  return (
    <form className="sign-up-form" onSubmit={handleSubmit(handlerSubmit)}>
      <Input
        register={register}
        placeholder="Username"
        required={"Username is required"}
        status={status}
        error={status.includes("username") || Boolean(errors.username?.message)}
      />
      <p className="sign-up-form__error">{errors.username?.message}</p>

      <Input
        register={register}
        placeholder="Email"
        required={"Email is required"}
        status={status}
        error={status[0].includes("email") || Boolean(errors.email?.message)}
        pattern={/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/}
      />
      <p className="sign-up-form__error">{errors.email?.message}</p>

      <Input
        register={register}
        placeholder="Password"
        required={"Password is required"}
        status={status}
        error={status[0].includes("password") || Boolean(errors.password?.message)}
        minLength={6}
      />
      <p className="sign-up-form__error">{errors.password?.message}</p>

      <p className="sign-up-form__error">{typeof status !== "string" ? status[0] : null}</p>
      <p className="sign-up-form__success">{status === "success" ? "Sign up success" : null}</p>

      <Button
        text={"Send password"}
        width="w200px"
        loading={status === "loading"}
        onClick={() => setStatus("after")}
      />
    </form>
  )
}

export default SignUpForm;