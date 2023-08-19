"use client";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { setEmail, setUsername } from "@/store/ducks/auth";
import { useForm } from "react-hook-form";


import patchUserData from "@/services/patchUsersData";

import { useState } from "react";

interface IForm {
  username: string;
  email: string;
}

const UserForm = () => {

  const [status, setStatus] = useState("start");

  const dispatch = useAppDispatch();
  const username = useAppSelector(store => store.auth.username);
  const email = useAppSelector(store => store.auth.email);
  const token = useAppSelector(store => store.auth.token);

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>(
    {
      defaultValues: {
        username: username,
        email: email
      }
    }
  );

  const handlerSubmit = (data: any) => {
    setStatus("loading");
    patchUserData(token, data)
      .then(res => {
        if (res.data.message) {
          setStatus(res.data.message);
        } else {
          dispatch(setUsername(res.data.username));
          dispatch(setEmail(res.data.email));

          setStatus("success")
        }
      });
  }

  return (
    <form onSubmit={handleSubmit(handlerSubmit)}>

      <Input
        register={register}
        placeholder="Username"
        required={"username is required"}
        status={status}
        error={status[0].includes("username") || Boolean(errors.username?.message)}
      />
      <p className="sign-up-form__error">{errors.username?.message}</p>

      <Input
        register={register}
        placeholder="Email"
        required={"email is required"}
        status={status}
        error={status[0].includes("email") || Boolean(errors.email?.message)}
        pattern={/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/}
      />
      <p className="sign-up-form__error">{errors.email?.message}</p>

      <p className="sign-up-form__error">{typeof status !== "string" ? status[0] : null}</p>
      <p className="sign-up-form__success">{status === "success" ? "Change user date is success" : null}</p>

      <Button
        text={"Save"}
        width="w200px"
        loading={status === "loading"}
        onClick={() => setStatus("after")}
      />
    </form>
  )
}

export default UserForm