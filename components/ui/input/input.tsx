"use client"

import { UseFormRegister } from "react-hook-form";


import "./input.sass";

interface IInput {
  placeholder: string;
  register: UseFormRegister<any>;
  required: string;
  status?: string
};


const Input = ({ placeholder, register, required, status }: IInput) => {

  let inputClassName: string;

  if (status === "success") {
    inputClassName = "input input_success";
  } else if (typeof status === "string") {
    inputClassName = "input input_error"
  } else {
    inputClassName = "input"
  }

  return (
    <input
      type="text"
      className={inputClassName}
      placeholder={placeholder}
      {...register(placeholder, { required })}
    />
  )
}

export default Input;