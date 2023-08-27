"use client";

import "../form.sass";
import { IUserForm } from "../type";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { setEmail, setUsername } from "@/store/ducks/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";

import patchUserData from "@/services/patch-users-data";


const UserForm = () => {

  const [status, setStatus] = useState("start");

  const dispatch = useAppDispatch();
  const username = useAppSelector(store => store.auth.username);
  const email = useAppSelector(store => store.auth.email);
  const token = useAppSelector(store => store.auth.token);

  const { register, handleSubmit, formState: { errors } } = useForm<IUserForm>(
    {
      defaultValues: {
        username: username,
        email: email
      }
    }
  );

  const handlerSubmit = (data: IUserForm) => {
    setStatus("loading");
    patchUserData(token, data)
      .then(res => {
        if (!res.data.message) {
          dispatch(setUsername(res.data.username));
          dispatch(setEmail(res.data.email));

          setStatus("success")
        } else {
          setStatus(res.data.message);
        }
      });
  }

  return (
    <form
      className="form form_w512px"
      onSubmit={handleSubmit(handlerSubmit)}
    >
      <div className="form__input">
        <Input
          register={register}
          placeholder="username"
          required={"username is required"}
          status={status}
          error={status[0].includes("username") || Boolean(errors.username?.message)}
        />
        <p className="form__error">{errors.username?.message}</p>
      </div>

      <div className="form__input">
        <Input
          register={register}
          placeholder="email"
          required={"email is required"}
          status={status}
          error={status[0].includes("email") || Boolean(errors.email?.message)}
          pattern={{
            value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
            message: "Email must be an email"
          }}
        />
        <p className="form__error">{errors.email?.message}</p>
      </div>

      <p className="form__error">{typeof status !== "string" ? status[0] : null}</p>
      <p className="form__success">{status === "success" ? "Change user date is success" : null}</p>

      <div className="form__button">
        <Button
          text={"Save"}
          width="w200px"
          loading={status === "loading"}
          onClick={() => setStatus("after")}
        />
      </div>
    </form>
  )
}

export default UserForm