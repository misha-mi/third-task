"use client"

import "./input.sass";
import CheckSVG from "@/lib/svg/check-svg";
import CloseSVG from "@/lib/svg/close-svg";

import { IInput } from "./type";

const Input = ({ placeholder, register, required, statusRequest, error = false, pattern, minLength = 0 }: IInput) => {

  let inputClassName: string;

  const inputName = placeholder[0].toUpperCase() + placeholder.replace(/[A-ZА-ЯЁ]/g, " $&").slice(1);

  if (!statusRequest) {
    inputClassName = "input"
  } else if (!error) {
    inputClassName = "input input_success"
  } else {
    inputClassName = "input input_error"
  }

  return (
    <div className={inputClassName}>
      <input
        type={placeholder.toLowerCase().includes("password") ? "password" : "text"}
        className="input__input"
        placeholder={inputName}
        {...register(
          placeholder,
          {
            required,
            minLength: minLength ? (
              {
                value: minLength,
                message: `${inputName} must be longer than or equal to ${minLength} characters`
              }
            ) : undefined,
            pattern: pattern
          }
        )}
      />

      <CheckSVG className="input__icon-done input__icon" />
      <CloseSVG className="input__icon-close input__icon" />
    </div>
  )
}

export default Input;

