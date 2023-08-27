
import { UseFormRegister } from "react-hook-form";

export interface IInput {
  placeholder: "username" | "password" | "email" | "currentPassword" | "newPassword";
  register: UseFormRegister<any>
  required: string;
  status?: string;
  error?: boolean
  pattern?: {
    value: RegExp,
    message: string
  },
  minLength?: number;
};