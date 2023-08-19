"use client"
import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import patchUpdatePassword from "@/services/patchUpdatePassword";
import { useAppSelector } from "@/store/redux-hooks";

import { useState } from "react";

import { useForm } from "react-hook-form";

interface IForm {
  currentPassword: string;
  newPassword: string;
}

const ChangePasswordForm = () => {

  const [status, setStatus] = useState("start");

  const token = useAppSelector(store => store.auth.token);

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const handlerSubmit = (data: IForm) => {
    setStatus("loading");
    patchUpdatePassword(token, data)
      .then(res => {
        if (res.data.message) {
          setStatus(res.data.message)
        } else {
          setStatus("success");
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(handlerSubmit)}>

      <Input
        register={register}
        placeholder="Current Password"
        required={"Current Password is required"}
        status={status}
        error={status[0].includes("password") || Boolean(errors.currentPassword?.message)}
        minLength={6}
      />
      <p className="sign-up-form__error">{errors.currentPassword?.message}</p>

      <Input
        register={register}
        placeholder="New Password"
        required={"New Password is required"}
        status={status}
        error={Boolean(errors.newPassword?.message)}
        minLength={6}
      />
      <p className="sign-up-form__error">{errors.newPassword?.message}</p>

      <p className="sign-up-form__error">{typeof status !== "string" ? status[0] : null}</p>
      <p className="sign-up-form__success">{status === "success" ? "Change Password is success" : null}</p>

      <Button
        text={"Save"}
        width="w200px"
        loading={status === "loading"}
        onClick={() => setStatus("after")}
      />
    </form>
  )
}

export default ChangePasswordForm;