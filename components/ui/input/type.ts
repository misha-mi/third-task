import { IChangePassword, ILogInForm, ISignUpForm, IUserForm } from "@/components/layout/forms/type";
import { UseFormRegister } from "react-hook-form";

type TRegister =
  UseFormRegister<ILogInForm> |
  UseFormRegister<IChangePassword> |
  UseFormRegister<ISignUpForm> |
  UseFormRegister<IUserForm>;

export interface IInput {
  placeholder: "username" | "password" | "email" | "currentPassword" | "newPassword";
  register: TRegister
  required: string;
  status?: string;
  error?: boolean
  pattern?: {
    value: RegExp,
    message: string
  },
  minLength?: number;
};