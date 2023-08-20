import { UseFormRegister } from "react-hook-form";

export interface IInput {
  placeholder: string;
  register: UseFormRegister<any>;
  required: string;
  status?: string;
  error?: boolean
  pattern?: {
    value: RegExp,
    message: string
  },
  minLength?: number;
};