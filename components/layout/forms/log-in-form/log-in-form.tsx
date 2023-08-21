"use client"

import "../form.sass";
import { IForm, ILogInForm } from "./type";

import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

import { useAppDispatch } from "@/store/redux-hooks";
import { setToken, setUsername } from "@/store/ducks/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

import postAuth from "@/services/postAuth";


const LogInForm = ({ destinationPath }: ILogInForm) => {

  const [status, setStatus] = useState("start");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const handlerSubmit = (data: IForm) => {
    setStatus("loading");
    postAuth(data).then(res => {
      if (!res.response.message) {
        dispatch(setUsername(res.response.user.username));
        dispatch(setToken(res.response.token));

        router.push(destinationPath);
      } else {
        setStatus(res.response.message);
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
          placeholder="Email"
          required={"Email is required"}
          status={status}
          error={status[0].includes("email") || Boolean(errors.email?.message)}
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
          placeholder="Password"
          required={"Password is required"}
          status={status}
          error={status[0].includes("password") || Boolean(errors.password?.message)}
          minLength={6}
        />
        <p className="form__error">{errors.password?.message}</p>
      </div>

      <p className="form__error">{typeof status !== "string" ? status[0] : null}</p>

      <div className="form__button">
        <Button
          text={"Log in"}
          width="w200px"
          loading={status === "loading"}
          onClick={() => setStatus("after")}
        />
      </div>
    </form>
  )
}

export default LogInForm;