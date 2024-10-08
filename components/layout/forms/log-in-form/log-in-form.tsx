"use client"

import "../form.sass";

import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

import { useAppDispatch } from "@/store/redux-hooks";
import { setEmail, setToken, setUsername } from "@/store/ducks/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";

import postSignIn from "@/services/post-sign-in";
import { IDestinationPath, ILogInForm } from "../type";
import { TStatusRequest } from "@/types";


const LogInForm = ({ destinationPath }: IDestinationPath) => {

  const [statusRequest, setStatusRequest] = useState<TStatusRequest>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<ILogInForm>();

  const handlerSubmit = (data: ILogInForm) => {

    setErrorMessages([]);
    setStatusRequest("loading");

    postSignIn(data).then(res => {
      if (!res.response.message) {

        dispatch(setUsername(res.response.user.username));
        dispatch(setToken(res.response.token));
        dispatch(setEmail(res.response.user.email));

        document.cookie = `token = ${res.response.token}; expires=36000`;
        setStatusRequest("success");
        location.replace(destinationPath);
      } else {
        setStatusRequest("error");
        setErrorMessages(res.data.message);
      }
    })
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit(handlerSubmit)}
    >
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

      <div className="form__button">
        <Button
          text={"Log in"}
          width="w200px"
          loading={statusRequest === "loading" || statusRequest === "success"}
          onClick={() => setStatusRequest("after request")}
        />
      </div>
    </form>
  )
}

export default LogInForm;