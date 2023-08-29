"use client"
import "../form.sass";

import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

import { useState } from "react";
import { useForm } from "react-hook-form";

import postSignUp from "@/services/post-sign-up";
import { ISignUpForm } from "../type";
import { TStatusRequest } from "@/types";


const SignUpForm = () => {

  const [statusRequest, setStatusRequest] = useState<TStatusRequest>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<ISignUpForm>();

  const handlerSubmit = (data: ISignUpForm) => {

    setErrorMessages([]);
    setStatusRequest("loading");

    postSignUp(data).then((res) => {
      if (!res.response.message) {
        setStatusRequest("success")
      } else {
        setStatusRequest("error");
        setErrorMessages(res.response.message);
      }
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit(handlerSubmit)}>
      <div className="form__input">
        <Input
          register={register}
          placeholder="username"
          required={"Username is required"}
          statusRequest={statusRequest}
          error={errorMessages[0]?.includes("username") || Boolean(errors.username?.message)}
        />
        <p className="form__error">{errors.username?.message}</p>
      </div>

      <div className="form__input">
        <Input
          register={register}
          placeholder="email"
          required={"Email is required"}
          statusRequest={statusRequest}
          error={errorMessages[0]?.includes("email") || Boolean(errors.email?.message)}
          pattern={{
            value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
            message: "Email must be an email"
          }}
        />
        <p className="form__error">{errors.email?.message}</p>
      </div>

      <div className="form__input">
        <Input
          register={register}
          placeholder="password"
          required={"Password is required"}
          statusRequest={statusRequest}
          error={errorMessages[0]?.includes("password") || Boolean(errors.password?.message)}
          minLength={6}
        />
        <p className="form__error">{errors.password?.message}</p>
      </div>

      <p className="form__error">{statusRequest === "error" ? errorMessages[0] : null}</p>
      <p className="form__success">{statusRequest === "success" ? "Change user date is success" : null}</p>

      <div className="form__button">
        <Button
          text={"Send password"}
          width="w200px"
          loading={status === "loading"}
          onClick={() => setStatusRequest("after request")}
        />
      </div>
    </form>
  )
}

export default SignUpForm;