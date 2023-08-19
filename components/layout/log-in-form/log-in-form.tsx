"use client"

import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

import { useAppDispatch } from "@/store/redux-hooks";
import { setToken, setUsername } from "@/store/ducks/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

import postAuth from "@/services/postAuth";

interface IForm {
  email: string;
  password: string;
}

const LogInForm = ({ productId }: { productId: number }) => {

  const [status, setStatus] = useState("start");

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlerSubmit = (data: { email: string, password: string }) => {

    setStatus("loading");

    postAuth(data).then(res => {
      if (!res.response.message) {
        dispatch(setUsername(res.response.user.username));
        dispatch(setToken(res.response.token));

        router.push(`/authorization/${productId}`);

        setStatus("success");
      } else {
        setStatus(res.response.message);
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(handlerSubmit)}>

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

      <Button
        text={"Log in"}
        width="w200px"
        loading={status === "loading"}
        onClick={() => setStatus("after")}
      />
    </form>
  )
}

export default LogInForm;