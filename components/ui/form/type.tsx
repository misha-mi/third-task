import { SubmitHandler } from "react-hook-form";

export interface IInputs {
  username?: string,
  password?: string,
  email?: string,
  currentPassword?: string,
  newPassword?: string,
}

export interface IForm {
  inputs: IInputs,
  buttonText: string,
  onSubmit: any,
  status?: "waiting" | "loading" | "error" | "success"
}