
import { TStatusRequest } from "@/types";
import { UseFormRegister } from "react-hook-form";

export interface IInput {
  placeholder: string;
  register: UseFormRegister<any>
  required: string;
  statusRequest?: TStatusRequest;
  error?: boolean
  pattern?: {
    value: RegExp,
    message: string
  },
  minLength?: number;
};