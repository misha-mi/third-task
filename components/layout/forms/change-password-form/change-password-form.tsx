"use client"

import "../form.sass";
import { IForm } from "./type";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";

import { useAppSelector } from "@/store/redux-hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";

import patchUpdatePassword from "@/services/patch-update-password";

const ChangePasswordForm = () => {

  const [status, setStatus] = useState("start");
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const token = useAppSelector(store => store.auth.token);

  const handlerSubmit = (data: IForm) => {
    setStatus("loading");
    patchUpdatePassword(token, data)
      .then(res => {
        if (!res.data.message) {
          setStatus("success");
        } else {
          setStatus(res.data.message)
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
          placeholder="Current Password"
          required={"Current Password is required"}
          status={status}
          error={status[0].includes("password") || Boolean(errors.currentPassword?.message)}
          minLength={6}
        />
        <p className="form__error">{errors.currentPassword?.message}</p>
      </div>

      <div className="form__input">
        <Input
          register={register}
          placeholder="New Password"
          required={"New Password is required"}
          status={status}
          error={Boolean(errors.newPassword?.message)}
          minLength={6}
        />
        <p className="form__error">{errors.newPassword?.message}</p>
      </div>

      <p className="form__error">{typeof status !== "string" ? status[0] : null}</p>
      <p className="form__success">{status === "success" ? "Change Password is success" : null}</p>

      <div className="form__button">
        <Button
          text={"Save"}
          width="w200px"
          loading={status === "loading"}
          onClick={() => setStatus("after")}
        />
      </div>
    </form >
  )
}

export default ChangePasswordForm;