"use client"

import "../form.sass";
import { IChangePassword } from "../type";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";

import { useAppSelector } from "@/store/redux-hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";

import patchUpdatePassword from "@/services/patch-update-password";
import { TStatusRequest } from "@/types";

const ChangePasswordForm = () => {

  const [statusRequest, setStatusRequest] = useState<TStatusRequest>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<IChangePassword>();

  const token = useAppSelector(store => store.auth.token);

  const handlerSubmit = (data: IChangePassword) => {

    setErrorMessages([]);
    setStatusRequest("loading");

    patchUpdatePassword(token, data)
      .then(res => {
        if (!res.data.message) {
          setStatusRequest("success")
        } else {
          setStatusRequest("error");
          setErrorMessages(res.data.message);
        }
      })
  }

  return (
    <form
      className="form form_w512px"
      onSubmit={handleSubmit(handlerSubmit)}
    >
      <div className="form__input">
        <Input
          register={register}
          placeholder="currentPassword"
          required={"Current Password is required"}
          statusRequest={statusRequest}
          error={errorMessages[0]?.includes("password") || Boolean(errors.currentPassword?.message)}
          minLength={6}
        />
        <p className="form__error">{errors.currentPassword?.message}</p>
      </div>

      <div className="form__input">
        <Input
          register={register}
          placeholder="newPassword"
          required={"New Password is required"}
          statusRequest={statusRequest}
          error={Boolean(errors.newPassword?.message)}
          minLength={6}
        />
        <p className="form__error">{errors.newPassword?.message}</p>
      </div>

      <p className="form__error">{statusRequest === "error" ? errorMessages[0] : null}</p>
      <p className="form__success">{statusRequest === "success" ? "Change user date is success" : null}</p>

      <div className="form__button">
        <Button
          text={"Save"}
          width="w200px"
          loading={status === "loading"}
          onClick={() => setStatusRequest("after request")}
        />
      </div>
    </form >
  )
}

export default ChangePasswordForm;