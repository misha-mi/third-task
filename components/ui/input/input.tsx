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
    <div className={inputClassName}>
      <input
        type="text"
        className="input__input"
        placeholder={placeholder}
        {...register(placeholder, { required })}
      />
      <span className="icon-close input__icon-close input__icon"></span>
      <span className="icon-done input__icon-done input__icon"></span>
    </div>
  )
}

export default Input;